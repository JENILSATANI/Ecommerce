import services from "../utils/service.js";
import { userModel } from "../models";
import { NotFoundError } from "../error/index.js";

const getUserDetails = async (req, res, next) => {
  try {
    let { page, pageSize, shortField, shortOrder, search } = req.query;
    // console.log(page, pageSize, shortField, shortOrder, search)
    const shortDetail = services.pagination(
      page,
      pageSize,
      shortOrder,
      shortField
    );
    let searching = {};
    if (search) {
      searching = services.searching(search, ["name", "email"]);
    }

    let data = await userModel.aggregate(
      [
        {
          $match: {
            ...searching,
            role: "USER"
          },
        },

        {
          $project: {
            _id: 0,
            name: 1,
            email: 1,
            isDeleted: 1,
            isActive: 1,
            createdAt: 1,
            updatedAt: 1,
          }
        },
        { $skip: shortDetail.skipRecord },
        { $limit: shortDetail.pageSize },
        { $sort: shortDetail.sort },
      ],
      { collation: { locale: "en" } }
    );


    return services.sendResponse(
      res,
      200,
      "Get User Successfully",
      data
    );
  } catch (error) {
    next(error);
  }
};

export default { getUserDetails };
