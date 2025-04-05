import multer from "multer";
import fs from "fs-extra";
import dotenv from "dotenv";
const response = (hattpStatus, success, message, data) => {
  if (data == null) {
    return {
      success: success,
      Message: message,
    };
  }
  return {
    success: success,
    Message: message,
    Data: data,
  };
};

class services {

  static sendResponse = async (res, hattpStatus, message, data) => {
    let success = hattpStatus == 200 ? true : false;
    res.status(hattpStatus).send(response(res, success, message, data));
  };

  static pagination = (page, pageSize, shortOrder, shortField) => {
    pageSize = Number(pageSize) || 10;
    page = Number(page) || 1;
    shortOrder = shortOrder == "asc" ? 1 : -1;
    shortField = shortField || "_id";

    const skipRecord = (page - 1) * pageSize;
    return { skipRecord, pageSize, sort: { [shortField]: shortOrder } };
  };

  static searching = (search, searchField) => {
    let filter = {};
    filter.$or = searchField.map((field) => {
      return { [field]: { $regex: search, $options: "i" } };
    });
    return filter;
  };


}

export default services;
