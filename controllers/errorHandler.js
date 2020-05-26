
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const status = error.status || 500;
  const message = status === 500 ? 'Internal Server Error' : error.message;
  res.status(status).send({ message });
};

module.exports = errorHandler;

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
