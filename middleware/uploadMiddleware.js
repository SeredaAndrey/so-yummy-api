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
    folder: (req, file) => "avatars",
    allowedFormats: ["jpg", "png"],
    format: async (req, file) => "jpg",
    transformation: [
      { gravity: "face", height: 200, width: 200, crop: "thumb" },
      { border: "5px_solid_black", radius: 20 },
      { overlay: "cloudinary_icon_white" },
      { flags: "relative", width: "0.25", crop: "scale" },
      { opacity: 50 },
      { flags: "layer_apply", gravity: "north_east", x: 10, y: 10 },
    ],
  },
});

const recipeStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, file) => "recipe",
    allowedFormats: ["jpg", "png"],
    format: async (req, file) => "jpg",
    eager: [
      {
        width: 700,
        height: 700,
        crop: "fill",
        public_id: (req, file) => `${file.originalname}_700`,
      },
      {
        width: 350,
        height: 350,
        crop: "fill",
        public_id: (req, file) => `${file.originalname}_350`,
      },
    ],
  },
});

const uploadAvatarCloud = multer({ storage: avatarStorage });
const uploadRecipePhotoCloud = multer({ storage: recipeStorage });

module.exports = uploadAvatarCloud;
module.exports = uploadRecipePhotoCloud;
