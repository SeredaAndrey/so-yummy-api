const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const avatarStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatars",
    allowedFormats: ["jpg", "png"],
    format: async (req, file) => "jpg",
    transformation: [
      { width: 200, height: 200, crop: "crop", gravity: "face" },
    ],
  },
});

const recipeStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "recipe",
    allowedFormats: ["jpg", "png"],
    format: async (req, file) => "jpg",
    eager: [
      { width: 700, height: 700, crop: "fill" },
      { width: 350, height: 350, crop: "fill" },
    ],
  },
});

const uploadAvatarCloud = multer({ storage: avatarStorage });
const uploadRecipePhotoCloud = multer({ storage: recipeStorage });

module.exports = uploadAvatarCloud;
module.exports = uploadRecipePhotoCloud;
