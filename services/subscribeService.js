const nodemailer = require("nodemailer");

require("dotenv").config();

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

const subscribeService = async (email) => {
  const message = {
    to: email,
    from: process.env.MAIL_LOGIN,
    subject: "Thank you for subscribe!",
    text: `You subscribed to the newsletter from the recipe book in ${email}`,
    html: `You subscribed to the newsletter from the recipe book in <strong>${email}</strong>`,
  };
  transporter
    .sendMail(message)
    .then((info) => {
      return info;
    })
    .catch((err) => new InternalError(err));
  return message;
};

module.exports = { subscribeService };
