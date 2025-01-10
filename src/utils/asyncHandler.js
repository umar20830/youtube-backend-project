// By using promieses

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error),
    );
  };
};

export { asyncHandler };

// By using try-catch and async

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     res.status(error.statusCodecd c || 500).json({
//       success: false,
//       error: error.message || "Internal Server Error",
//     });
//   }
// };
