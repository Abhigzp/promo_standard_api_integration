const pcnaService = require("../services/pcna.service");


exports.getProduct = async (req, res, next) => {
  try {
    const data = await pcnaService.getProduct();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
exports.getInventory= async(req, res) => {
  try {
    const data = await pcnaService.getInventory(req.params.productId);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}