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
  allowedFormats: ["jpg", "png"],
  params: {
    folder: (req, file) => "/recipe",
    transformation: (req, file) => ["recipe_700"],
  },
});

const uploadRecipePhotoCloud = multerRecipe({ storage: recipeStorage });

module.exports = uploadRecipePhotoCloud;
