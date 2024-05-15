import {
  productModel,
  userModel,
  categoryModel,
  tagModel,
  imageModel,
} from "../models";
import mongoose from "mongoose";
import services from "../utils/service";
import { BadRequestError, NotFoundError } from "../error/index.js";
console.log("process.env.BASE_URL", process.env.BASE_URL);

const addProduct = async (req, res, next) => {
  try {
    const productDetail = new productModel();
    console.log("🚀 ~ addProduct ~ productDetail:", productDetail);

    const upload = services.uploadImage(
      "productImage",
      productDetail._id,
      "productId"
    );
    console.log("🚀 ~ addProduct ~ upload:", upload);

    upload(req, res, async (err) => {
      if (err) {
        console.log("🚀 ~ addProduct ~ upload error:", err);
        return next(err);
      }
      console.log(req.images, "SSSSSSSSSSSSSSSSSSSSSSS");

      try {
        const productExist = await productModel.findOne({
          productName: req.body.productName,
        });

        if (productExist) {
          throw new BadRequestError("Product already exists.");
        }

        const { categoryId, tagId } = req.body;

        const categoryIdExists = await categoryModel.findById(categoryId);
        if (!categoryIdExists) {
          throw new Error("Category ID not found");
        }

        const tagIdExists = await tagModel.findById(tagId);
        if (!tagIdExists) {
          throw new Error("Tag ID not found");
        }

        productDetail.productName = req.body.productName;
        productDetail.description = req.body.description;
        productDetail.price = req.body.price;
        productDetail.categoryId = categoryId;
        productDetail.tagId = tagId;

        await productDetail.save();

        if (req.images && req.images.length > 0) {
          await imageModel.insertMany(
            req.images.map((image) => ({
              productId: productDetail._id,
              ...image,
            }))
          );
        }

        return services.sendResponse(res, 200, "Data saved");
      } catch (error) {
        console.log("🚀 ~ upload ~ error:", error);
        return next(error);
      }
    });
  } catch (error) {
    console.log("🚀 ~ addProduct ~ error:", error);
    return next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    let { productId } = req.query;
    console.log("🚀 ~ getProduct ~ productId:", productId);

    if (!productId) {
      throw NotFoundError("Tag not found.");
    }

    let productData = await productModel.findOne({ _id: productId });
    if (!productData) {
      throw new BadRequestError("tag Already exist");
    }
    let data = await productModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(productId),
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "categoryData",
        },
      },
      {
        $lookup: {
          from: "tags",
          localField: "tagId",
          foreignField: "_id",
          as: "tagData",
        },
      },
      {
        $lookup: {
          from: "productimages",
          localField: "_id",
          foreignField: "productId",
          as: "imagesData",
        },
      },
      {
        $project: {
          _id: 1,
          productName: 1,
          description: 1,
          isDeleted: 1,
          price: 1,
          isActive: 1,
          createdAt: 1,
          updatedAt: 1,
          category: { $arrayElemAt: ["$categoryData.categoryName", 0] },
          tag: { $arrayElemAt: ["$tagData.tagName", 0] },
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
    console.log("🚀 ~ getProduct ~ data:", data);
    return services.sendResponse(res, 200, "Get Product Successfully", data);
  } catch (error) {
    return next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    if (!req.body) throw new Error("Please Enter Data");
    let {productId } = req.body;
    console.log("🚀 ~ updateProduct ~ req.body:", req.body);

    if (!productId) {
      throw new BadRequestError("Product already exists.");
    }

    let productExist;
    if (productId) {
      productExist = await productModel.findOne({ _id: productId });
      console.log("productExist", productExist);
      if (!productExist) {
        throw new BadRequestError("Project Not Found");
      }
    }

    let data = await productModel.updateOne(
      { productId: req.body._id },
      { $set: req.body }
    );
    return services.sendResponse(
      res,
      200,
      "product Updated Successfully",
      data
    );
  } catch (error) {
    return next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productDelete = await productModel.findOne({
      _id: req.query.productId,
      isDeleted: false,
    });
    if (!productDelete) {
      throw new BadRequestError("Product Already Deleted");
    }
    productDelete.isDeleted = true;
    productDelete.save();
    return services.sendResponse(res, 200, "product Delete Successfully");
  } catch (error) {
    next(error);
  }
};

export default { addProduct, updateProduct, getProduct, deleteProduct };
