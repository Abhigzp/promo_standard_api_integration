const pcnaService = require("../services/pcna.service");

async function getProduct(req, res) {
  try {
    const data = await pcnaService.getProduct();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
async function getInventory(req, res) {
  try {
    const data = await pcnaService.getInventory();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { getProduct, getInventory };