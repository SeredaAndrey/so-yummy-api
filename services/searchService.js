const Recipe = require("../schemas/recipiesSchema");
const { count } = require("../schemas/userSchema");

const getResponseSearchRecipeByTitleService = async (
  title,
  { skip, limit }
) => {
  const count = await Recipe.find({
    $or: [
      { title: { $regex: title.toLowerCase() } },
      { title: { $regex: capitalize(title) } },
    ],
  }).count();
  const countPage = await Recipe.find({
    $or: [
      { title: { $regex: title.toLowerCase() } },
      { title: { $regex: capitalize(title) } },
    ],
  })
    .sort({ popularit: -1 })
    .skip(skip)
    .limit(limit)
    .count();
  const recipes = await Recipe.find({
    $or: [
      { title: { $regex: title.toLowerCase() } },
      { title: { $regex: capitalize(title) } },
    ],
  })
    .sort({ popularit: -1 })
    .skip(skip)
    .limit(limit);
  return { count, countPage, recipes };
};

const capitalize = (str) => {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

module.exports = { getResponseSearchRecipeByTitleService };
