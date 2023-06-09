const Recipe = require("../schemas/recipiesSchema");

const popularService = async ({ skip, limit }) => {
  return await Recipe.find()
    .sort({ popularity: -1 })
    .select({
      _id: 1,
      thumb: 1,
      preview: 1,
      title: 1,
      category: 1,
      time: 1,
      popularity: 1,
      instructions: 1,
    })
    .skip(skip)
    .limit(limit);
};

module.exports = { popularService };
