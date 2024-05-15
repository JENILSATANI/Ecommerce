import services from "../utils/service.js";
import { orderModel, userModel } from "../models";
import { NotFoundError } from "../error/index.js";

const getOrder = async (req, res, next) => {
  try {
    let { page, pageSize, shortField, shortOrder, search } = req.query;

    const shortDetail = services.pagination(
      page,
      pageSize,
      shortOrder,
      shortField
    );
    let searching = {};
    if (search) {
      searching = services.searching(search, ["status"]);
    }

    let data = await orderModel.aggregate(
      [
        {
          $match: {
            ...searching,
          },
        },
        {
          $lookup: {
            from: "carts",
            localField: "cartId",
            foreignField: "_id",
            as: "cartData",
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "cartData.productId",
            foreignField: "_id",
            as: "productData",
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "productData.categoryId",
            foreignField: "_id",
            as: "categoriesData",
          },
        },
        {
          $lookup: {
            from: "tags",
            localField: "productData.tagId",
            foreignField: "_id",
            as: "tagData",
          },
        },
        {
          $lookup: {
            from: "productimages",
            localField: "productData._id",
            foreignField: "productId",
            as: "imagesData",
          },
        },
        {
          $project: {
            _id: 1,
            status: 1,
            isCancel: 1,
            isDeleted: 1,
            isActive: 1,
            createdAt: 1,
            updatedAt: 1,
            totalPrice: { $arrayElemAt: ["$cartData.totalPrice", 0] },
            isCheckout: { $arrayElemAt: ["$cartData.isCheckout", 0] },
            productName: { $arrayElemAt: ["$productData.productName", 0] },
            productPrice: { $arrayElemAt: ["$productData.price", 0] },
            categoryName: { $arrayElemAt: ["$categoriesData.categoryName", 0] },
            tagName: { $arrayElemAt: ["$tagData.tagName", 0] },
            images: {
              $map: {
                input: "$imagesData",
                as: "image",
                in: { $concat: [process.env.BASE_URL, "$$image.imagePath"] },
              },
            },
          },
        },
        { $skip: shortDetail.skipRecord },
        { $limit: shortDetail.pageSize },
        { $sort: shortDetail.sort },
      ],
      { collation: { locale: "en" } }
    );

    let userData = await userModel.aggregate([
      {
        $match: {
          role: "CUSTOMER",
        },
      },
      {
        $project: {
          name: 1,
          role: 1,
          email: 1,
          phoneNumber: 1,
          isDeleted: 1,
          isActive: 1,
        },
      },
    ]);

    if (data.length === 0) {
      throw new NotFoundError("order not found");
    }
    let adminData = {
      data,
      userData,
    };
    console.log("🚀 ~ getProduct ~ data:", data);
    return services.sendResponse(
      res,
      200,
      "Get Product Successfully",
      adminData
    );
  } catch (error) {
    next(error);
  }
};

export default { getOrder };
