import services from "../utils/service.js";
import { cartModel, orderModel } from "../models";
import { BadRequestError, NotFoundError } from "../error/index.js";
import { ORDERSTATUS } from "../utils/enum";
import mongoose from "mongoose";

const addOrder = async (req, res, next) => {
  try {
    let { cartId } = req.body;
    if (!cartId) {
      throw new NotFoundError("please pass valid cartId");
    }
    const cartFind = await cartModel.findOne({
      _id: cartId,
      isCheckout: false,
    });

    if (!cartFind) {
      throw new NotFoundError("Cart not found");
    }

    if (!cartFind.isCheckout) {
      cartFind.isCheckout = true;
      await cartFind.save();
    }

    await orderModel.create(req.body);

    return services.sendResponse(
      res,
      200,
      "Order placed successfully",
      req.body
    );
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    let { orderId } = req.query;

    if (!orderId) {
      throw new NotFoundError("please pass valid filed");
    }

    let data = await orderModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(orderId),
          isDeleted: false,
          isCancel: false,
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
    ]);
    if (data.length === 0) {
      throw new NotFoundError("order not found");
    }
    console.log("🚀 ~ getProduct ~ data:", data);
    return services.sendResponse(res, 200, "Get Product Successfully", data);
  } catch (error) {
    return next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    let { orderId, status } = req.body;
    if (
      req.body?.status &&
      !Object.keys(ORDERSTATUS).includes(req.body?.status)
    ) {
      throw new NotFoundError("please pass valid status");
    }
    if (!orderId) {
      throw new NotFoundError("please pass valid cartId");
    }
    const OrderData = await orderModel.findOne({
      _id: orderId,
      isDeleted: false,
    });
    if (!OrderData) {
        throw new NotFoundError("Order Not found.");
      }
  
    if (OrderData.isCancel) {
      throw new NotFoundError("order is cancel");
    }

 
    let data = await orderModel.updateOne(
      { _id: orderId },
      { $set: { status: status } }
    );

    if (!data) {
      throw new BadRequestError("something whet wrong while update cart");
    }

    return services.sendResponse(res, 200, "order status updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    let { orderId } = req.query;
    if (!orderId) {
      throw new NotFoundError("please pass valid cartId");
    }
    const productDelete = await orderModel.findOne({
      _id: orderId,
      isDeleted: false,
    });
    if (!productDelete) {
      throw new BadRequestError("order Already Deleted");
    }
    productDelete.isDeleted = true;
    productDelete.isCancel = true;
    productDelete.save();
    return services.sendResponse(res, 200, "order Delete Successfully");
  } catch (error) {
    next(error);
  }
};

export default { addOrder, updateOrder, getOrder, deleteOrder };
