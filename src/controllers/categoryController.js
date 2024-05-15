import services from "../utils/service.js";
import { validationResult } from "express-validator";
import { categoryModel } from "../models";
import { BadRequestError , NotFoundError } from "../error/index.js";

const addCategory = async (req, res, next) => {
  try {
    

    const categoryExist = await categoryModel.findOne({
        categoryName: req.body.categoryName,
    });
  
    if (categoryExist) {
      throw new BadRequestError("Category Already exist");
    }

    await categoryModel.create(req.body);
    return services.sendResponse(
      res,
      200,
      "Your data has been save..!",
      req.body
    );
  } catch (error) {
    next(error)
  }
};

const getCategory = async (req, res, next) => {
  try {
    const categoryData = await categoryModel.find({
      isDeleted: false,
      isActive: true,
    });
    if (!categoryData) {
      throw NotFoundError("Category not found.");
    }
    return services.sendResponse(
      res,
      200,
      "category List Successfully",
      categoryData
    );
  } catch (error) {
    next(error)
  }
};

const updateCategory = async (req, res, next) => {
  try {
    
    console.log("🚀 ~ updateCategory ~ req.params.id:", req.query.id)

    const categoryData = await categoryModel.findOne({
      _id: req.query.id,
      isDeleted: false,
    });
    
    if (!categoryData) {
      throw new NotFoundError("Category Not found.");
    }

    const categoryExist = await categoryModel.findOne(
      {_id: { $ne: req.query.id },
      categoryName: req.body.categoryName
  });
    if (categoryExist) {
      throw new BadRequestError("Category Already Exists.");
    }

    categoryData.categoryName = req.body.categoryName;
    const categoryUpdate = await categoryData.save();
    return services.sendResponse(res, 200, "Category Updated", categoryUpdate);
  } catch (error) {
    next(error)
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const categoryDelete = await categoryModel.findOne({
      _id: req.query.id,
      isDeleted: false,
    });
    if (!categoryDelete) {
      throw new BadRequestError("Category Already Deleted");
    }
    categoryDelete.isDeleted = true;
    categoryDelete.save();
    return services.sendResponse(res, 200, "Category Delete Successfully");
  } catch (error) {
    next(error)
  }
};

export default{ addCategory, getCategory, updateCategory, deleteCategory };
