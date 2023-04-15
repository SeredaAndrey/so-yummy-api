const popularController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

module.exports = { popularController };
