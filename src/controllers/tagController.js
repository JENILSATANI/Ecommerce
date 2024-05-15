import services from "../utils/service.js";
import { validationResult } from "express-validator";
import { tagModel } from "../models";
import { BadRequestError , NotFoundError } from "../error/index.js";

const addTagData = async (req, res, next) => {
  try {
    

    const tagExist = await tagModel.findOne({
        tagName: req.body.tagName,
    });
  
    if (tagExist) {
      throw new BadRequestError("tag Already exist");
    }

    await tagModel.create(req.body);
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

const getTag = async (req, res, next) => {
  try {
    const tagData = await tagModel.find({
      isDeleted: false,
      isActive: true,
    });
    if (!tagData) {
      throw NotFoundError("Tag not found.");
    }
    return services.sendResponse(
      res,
      200,
      "tag List Successfully",
      tagData
    );
  } catch (error) {
    next(error)
  }
};

const updateTag = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return services.sendResponse(res, 400, errors.array());
      }
  
      const tagData = await tagModel.findOne({
        _id: req.query.id,
        isDeleted: false,
      });
  
      if (!tagData) {
        throw new NotFoundError("Tag Not found.");
      }
  
      const existingTag = await tagModel.findOne({
        _id: { $ne: req.query.id },
        tagName: req.body.tagName
      });
      console.log("🚀 ~ updateTag ~ existingTag:", existingTag)
  
      if (existingTag) {
        throw new BadRequestError("Tag with this name already exists.");
      }
  
      tagData.tagName = req.body.tagName;
      await tagData.save();
  
      return services.sendResponse(res, 200, "Tag updated successfully", tagData);
    } catch (error) {
      next(error);
    }
  };
  

const deleteTag = async (req, res, next) => {
  try {
    const tagDelete = await tagModel.findOne({
      _id: req.query.id,
      isDeleted: false,
    });
    if (!tagDelete) {
      throw new BadRequestError("tag Already Deleted");
    }
    tagDelete.isDeleted = true;
    await tagDelete.save();
    return services.sendResponse(res, 200, "tag Delete Successfully");
  } catch (error) {
    next(error)
  }
};

export default {addTagData,getTag,updateTag,deleteTag};
