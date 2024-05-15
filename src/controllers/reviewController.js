import services from "../utils/service.js";
import { validationResult } from "express-validator";
import { reviewModel, productModel, userModel } from "../models";
import { BadRequestError, NotFoundError } from "../error/index.js";

const addReview = async (req, res, next) => {
  try {
    const { productId, userId, rating, reviewText } = req.body;
    let productExits = await productModel.findOne({ _id: productId });
    if (!productExits) {
      throw new NotFoundError("Product not found.");
    }
    let checkCart = await userModel.findOne({ _id: userId });
    if (!checkCart) {
      throw new NotFoundError("User Not Found");
    }
    const review = await reviewModel.create({
      product: productId,
      user: userId,
      rating,
      reviewText,
    });

    return services.sendResponse(res, 200, "Review added successfully", review);
  } catch (error) {
    next(error);
  }
};

const getReviewsByProduct = async (req, res, next) => {
  try {
    let { page, pageSize, shortField, shortOrder, search } = req.query;

    const shortDetail = services.pagination(
      page,
      pageSize,
      shortOrder,
      shortField
    );

    const reviews = await reviewModel.aggregate(
      [
        {
          $match: {
            isActive: true,
            isDeleted: false,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "product",
            foreignField: "_id",
            as: "productData",
          },
        },
        {
          $project: {
            rating: 1,
            reviewText: 1,
            isActive: 1,
            isDeleted: 1,
            productName: { $arrayElemAt: ["$productData.productName", 0] },
            productPrice: { $arrayElemAt: ["$productData.price", 0] },
          },
        },
        { $skip: shortDetail.skipRecord },
        { $limit: shortDetail.pageSize },
        { $sort: shortDetail.sort },
      ],
      { collation: { locale: "en" } }
    );
    return services.sendResponse(res, 200, "Review get successfully", reviews);
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { reviewId } = req.query;
    if (!reviewId) {
      throw new NotFoundError("please pass required field");
    }
    const { rating, reviewText } = req.body;

    const review = await reviewModel.findByIdAndUpdate(reviewId, {
      rating,
      reviewText,
    });

    if (!review) {
      throw new NotFoundError("Review not found");
    }
    return services.sendResponse(
      res,
      200,
      "Review updated successfully",
      review
    );
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const { reviewId } = req.query;

    const review = await reviewModel.findOne({
      _id: reviewId,
      isDeleted: false,
    });
    if (!review) {
      throw new BadRequestError(" Review  Already Deleted");
    }
    review.isDeleted = true;
    await review.save();
    return services.sendResponse(res, 200, "Review Delete Successfully");
  } catch (error) {
    next(error);
  }
};

export default { addReview, getReviewsByProduct, updateReview, deleteReview };
