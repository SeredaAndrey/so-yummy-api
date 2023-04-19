const { ValidateError, FoundingError } = require("../middleware/errorHandler");
const { recipieQueryValidete } = require("../schemas/recipieValidate");
const { popularService } = require("../services/popularService");

const popularController = async (req, res, next) => {
  const reqValidateParams = recipieQueryValidete.validate(req.params);

  let { page = 1, limit = 4 } = req.query;
  limit = parseInt(limit);
  const skip = (parseInt(page) - 1) * limit;

  if (!reqValidateParams.error) {
    const recipes = await popularService({ skip, limit });
    if (recipes) {
      return res.status(200).json({
        message: "getting popular recipes success",
        code: 200,
        data: recipes,
        page: page,
        limit: limit,
      });
    } else throw new FoundingError("Recipes not found");
  } else throw new ValidateError(reqValidateQuery.error);
};

module.exports = { popularController };
