import { productModel, userModel, cartModel } from "../models";
import mongoose from "mongoose";
import services from "../utils/service";
import { BadRequestError, NotFoundError } from "../error/index.js";

const addToCart = async (req, res, next) => {
  try {
    if (!req.body) throw new Error("Please Enter Data");
    let { productId, userId } = req.body;
    if (!productId) {
      throw new NotFoundError("Please Pass ProjectId");
    }
    if (!userId) {
      throw new NotFoundError("Please Pass userId");
    }

    let productExits = await productModel.findOne({ _id: productId });
    if (!productExits) {
      throw new NotFoundError("Product not found.");
    }
    let userExits = await userModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: "carts",
          let: {
            user_id: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$isCheckout", false] },
                    { $eq: ["$userId", "$$user_id"] },
                  ],
                },
              },
            },
          ],
          as: "cartData",
        },
      },
    ]);

    if (!userExits[0]) {
      throw new BadRequestError("User Not Found");
    }

    if ((userExits && userExits[0].cartData.length == 0) || !userId) {
      let crateCart = await cartModel.create({
        totalPrice: productExits.price ? productExits.price : 0,
        productId,
        userId,
      });
      if (!crateCart) {
        throw new BadRequestError("Something Went Wrong");
      }
      return services.sendResponse(res, 200, "Cart Add Success", crateCart);
    } else {
      const cartFind = userExits[0].cartData[0];
      cartFind.productId.push(productId);
      cartFind.totalPrice =
        cartFind.totalPrice && productExits.price
          ? cartFind.totalPrice + productExits.price
          : cartFind.totalPrice;

      let updateCart = await cartModel.findOneAndUpdate(
        {
          _id: cartFind._id,
        },
        cartFind
      );
      return services.sendResponse(res, 200, "cart add success", updateCart);
    }
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    let { userId, cartId } = req.query;
    if (!userId && !cartId) {
      throw new NotFoundError("please pass required field");
    }

    if (userId) {
      let checkCart = await cartModel.findOne({ userId: userId });
      if (!checkCart) {
        throw new NotFoundError("User Not Found");
      }
    } else if (cartId) {
      let findCartId = await cartModel.findOne({ _id: cartId });
      if (!findCartId) {
        throw new NotFoundError("Cart Not Found");
      }

      if (findCartId.isCheckout) {
        throw new BadRequestError("Payment Done For This Cart");
      }
    }

    if (userId || cartId) {
      const userCart = await cartModel.aggregate([
        {
          $match: {
            $or: [
              { userId: new mongoose.Types.ObjectId(userId) },
              { _id: new mongoose.Types.ObjectId(cartId) },
            ],
            isCheckout: false,
          },
        },
        {
          $lookup: {
            from: "products",
            let: { productId: "$productId" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$isActive", true] },
                      { $in: ["$_id", "$$productId"] },
                    ],
                  },
                },
              },
            ],
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
            productId: 1,
            userId: 1,
            totalPrice: 1,
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
            isCheckout: 1,
            isDeleted: 1,
            price: 1,
            isActive: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      ]);
      return services.sendResponse(res, 200, "Get Data SuccessFully", userCart);
    }
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    let { productId, cartId } = req.body;
    console.log("🚀 ~ removeFromCart ~ req.body:", req.body.cartId);
    if (!cartId || !productId) {
      throw new NotFoundError("please enter valid data");
    }

    let cartExist = await cartModel.findOne({ _id: cartId, isCheckout: false });
    console.log("🚀 ~ removeFromCart ~ cartExist:", cartExist);
    if (!cartExist) {
      throw new NotFoundError("Cart not found");
    }

    let productExist = await productModel.findOne({ _id: productId });
    if (!productExist) {
      throw new NotFoundError("Product not found.");
    }

    if (cartExist.productId.includes(productId)) {
      let index = cartExist.productId.indexOf(productId);
      if (index !== -1) {
        cartExist.productId.splice(index, 1);
      }
      cartExist.totalPrice = cartExist.totalPrice - productExist.price;
    } else {
      throw new NotFoundError("Product not found");
    }

    let updateCart = await cartModel.findOneAndUpdate(
      { _id: cartId },
      cartExist
    );
    if (!updateCart) {
      throw new BadRequestError("Something went wrong while remove cart");
    }
    return services.sendResponse(res, 200, "Item Removed", updateCart);
  } catch (error) {
    next(error);
  }
};
export default { addToCart, getCart, removeFromCart };
