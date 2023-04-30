const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const shajs = require("sha.js");
require("dotenv").config();

const User = require("../schemas/userSchema");

const config = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_LOGIN,
    pass: process.env.MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const registrationService = async ({ email, password, name }) => {
  const user = await User.findOne({ email });

  const vCode = shajs("sha256").update(email).digest("hex");

  if (user) {
    return;
  }

  const newUser = new User({ email, password, name, vCode });
  await newUser.save();

  const msgVerify = {
    to: email,
    from: process.env.MAIL_LOGIN,
    subject: "Thank you for registration!",
    text: `Please, follow this link: https://katedietkova.github.io/so-yummy-project/verification/${vCode}`,
    html: `Please, follow this link: <a><strong>https://katedietkova.github.io/so-yummy-project/verification/${vCode}</strong></a>`,
  };
  transporter
    .sendMail(msgVerify)
    .then((info) => {
      return info;
    })
    .catch((err) => new InternalError(err));
  return await User.findOne({ email }, { password: 0, vCode: 0, __v: 0 });
};

const verificationService = async (email, vCode) => {
  const resUser = await User.findOne({
    email,
    verify: false,
    vCode: vCode,
  });
  if (resUser) {
    const token = jwt.sign(
      {
        _id: resUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "14d" }
    );
    await User.findByIdAndUpdate(
      { _id: resUser._id },
      { verify: true, loggedIn: true, vCode: null },
      { new: true }
    );
    const user = await User.findOne(
      { email },
      { password: 0, vCode: 0, __v: 0 }
    );
    return { user, token };
  }
};

const loginService = async (email, password) => {
  const resUser = await User.findOne({ email, verify: true });
  if (resUser && (await bcrypt.compare(password, resUser.password))) {
    const token = jwt.sign(
      {
        _id: resUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "14d" }
    );
    await User.findByIdAndUpdate(
      { _id: resUser._id },
      { loggedIn: true },
      { new: true }
    );
    const user = await User.findOne(
      { _id: resUser._id },
      { password: 0, vCode: 0, __v: 0 }
    );
    return { user, token };
  }
};

const logoutService = async (_id) => {
  return await User.findOneAndUpdate(
    { _id, loggedIn: true },
    { loggedIn: false },
    { new: true }
  );
};

module.exports = {
  registrationService,
  verificationService,
  loginService,
  logoutService,
};
