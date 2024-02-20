// const { StatusCodes } = require('http-status-codes');
// const errorFunction = (err, req, res, next) => {
//   let errrorObject = {
//       message: err.message || 'An error occurred. Please try again',
//       statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
//   };
//   if (err.name === 'ErrorInValidation') {
//     errrorObject.message = Object.values(err.errors)
//       .map((item) => item.message)
//       .join(',');
//     errrorObject.statusCode = 400;
//   }
//   if (err.code && err.code === 11000) {
//     errrorObject.message = `Error in value entered`;
//     errrorObject.statusCode = 400;
//   }
//   if (err.name === 'NoItemError') {
//     errrorObject.message = "No item found with this id";
//     errrorObject.statusCode = 404;
//   }

//   return res.status(errrorObject.statusCode).json({ message: errrorObject.message });
// };

// module.exports = errorFunction;
