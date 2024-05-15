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

  static uploadImage = (name, id, foreignField) => {
    console.log("🚀 ~ services ~ name, id, foreignField:", name, id, foreignField)
    const storage = multer.diskStorage({
      destination: async function (req, file, cb) {
        const path = `uploads/${id}/`;
        fs.mkdir(path, { recursive: true });
        req.images = [
          ...(req?.images ? req.images : []),
          { imagePath: `${path}${file.originalname}`, [foreignField]: id },
        ];
        console.log(req.images);

        cb(null, path);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    const upload = multer({ storage: storage });
    return upload.fields([{ name, maxCount: 5 }]);
  };

  static unlinkImage = (images, path) => {
    try {
      fs.unlink(images, async (error) => {
        if (error) {
          throw error;
        }

        if (fs.existsSync(path)) {
          const files = fs.readdirSync(path);
          if (files.length === 0) {
            fs.rmdirSync(path);
          }
        }
      });
      return true;
    } catch (error) {
      throw error;
    }
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
