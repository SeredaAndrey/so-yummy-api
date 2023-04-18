const User = require("../schemas/userSchema");

const getUserDataService = async (_id) => {
  return await User.findOne({ _id }, { password: 0, vCode: 0 });
};

const patchUserDataService = async (_id, body) => {
  const user = await User.findOneAndUpdate({ _id }, body, { new: true });
  if (user) {
    return await User.findOne({ _id }, { password: 0, vCode: 0 });
  }
};

module.exports = { getUserDataService, patchUserDataService };
