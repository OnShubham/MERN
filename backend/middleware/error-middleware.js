const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend went wrong";
  const extraDetails = err.extraDetails || "Backend went wrong";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
