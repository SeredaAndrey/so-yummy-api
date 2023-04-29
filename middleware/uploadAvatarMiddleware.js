const cloudinaryAvatar = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multerAvatar = require("multer");

cloudinaryAvatar.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const avatarStorage = new CloudinaryStorage({
  cloudinary: cloudinaryAvatar,
  params: {
    folder: (req, file) => "/avatars",
    allowedFormats: ["jpg", "png"],
    format: async (req, file) => "jpg",
    transformation: (req, file) => ["avatar"],
  },
});

const uploadAvatarCloud = multerAvatar({ storage: avatarStorage });

module.exports = uploadAvatarCloud;
