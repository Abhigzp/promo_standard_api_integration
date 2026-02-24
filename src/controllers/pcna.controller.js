const pcnaService = require("../services/pcna.service");

const { getProduct } = require("../services/pcna.service");

exports.getProduct = async (req, res, next) => {
  try {
    const data = await getProduct();
    res.success(data);
  } catch (err) {
    next(err);
  }
};
async function getInventory(req, res) {
  try {
    const data = await pcnaService.getInventory();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { getProduct, getInventory };