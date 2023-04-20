const User = require("../schemas/userSchema");

const getUserDataService = async (_id) => {
  return await User.findOne({ _id }, { password: 0, vCode: 0 });
};

const patchUserDataService = async (_id, body, avatarUrl) => {
  const { name } = body;
  const result = await getUserDataService(_id);
  if (!result) {
    return;
  }
  if (!avatarUrl) {
    avatarUrl = result.avatarUrl;
  }
  const user = await User.findOneAndUpdate(
    { _id, loggedIn: true },
    { name, avatarUrl },
    { new: true }
  );
  if (user) {
    return await User.findOne({ _id }, { password: 0, vCode: 0 });
  }
};

module.exports = { getUserDataService, patchUserDataService };
