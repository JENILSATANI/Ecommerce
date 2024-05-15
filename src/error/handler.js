import services from "../utils/service";

const errorHandler = (err, req, res, next) => {
  console.log('Error :>> ', err);
  const message = err.message || "Something Went Wrong.";
  const code = err.code || 500;
  const stack = err.stack;
  const route =req.url;
  const errorMessage = {"stack":stack, "route":route};
  return services.sendResponse(res , code , message ,errorMessage)
};

export default errorHandler;