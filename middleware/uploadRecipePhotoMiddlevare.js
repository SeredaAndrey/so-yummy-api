const cloudinaryRecipe = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multerRecipe = require("multer");

cloudinaryRecipe.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const recipeStorage = new CloudinaryStorage({
  cloudinary: cloudinaryRecipe,
  params: {
    folder: (req, file) => "/recipe",
    allowedFormats: ["jpg", "png"],
    format: async (req, file) => "jpg",
    eager: (req, file) => [
      {
        width: 700,
        height: 700,
        crop: "fill",
        public_id: (req, file) => `700_${file.originalname}`,
      },
      {
        width: 350,
        height: 350,
        crop: "fill",
        public_id: (req, file) => `350_${file.originalname}`,
      },
    ],
  },
});

const uploadRecipePhotoCloud = multerRecipe({ storage: recipeStorage });

module.exports = uploadRecipePhotoCloud;
