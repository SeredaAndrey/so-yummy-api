const Recipe = require("../schemas/recipiesSchema");

const getResponseSearchRecipeByTitleService = async (
  title,
  { skip, limit }
) => {
  return await Recipe.find({
    $or: [
      { title: { $regex: title.toLowerCase() } },
      { title: { $regex: capitalize(title) } },
    ],
  })
    .sort({ popularit: -1 })
    .skip(skip)
    .limit(limit);
};

const capitalize = (str) => {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

module.exports = { getResponseSearchRecipeByTitleService };
