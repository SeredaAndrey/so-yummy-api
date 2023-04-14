class Errors extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class ValidateError extends Errors {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class AutorizationError extends Errors {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}
class FoundingError extends Errors {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}
class ConflictError extends Errors {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}
class InternalError extends Errors {
  constructor(message) {
    super(message);
    this.status = 500;
  }
}

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof Errors) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  asyncWrapper,
  errorHandler,
  AutorizationError,
  ConflictError,
  ValidateError,
  FoundingError,
  InternalError,
};
