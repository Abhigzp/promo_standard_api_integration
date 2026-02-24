require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,

  soap: {
    inventoryWsdl: process.env.INVENTORY_WSDL,
    pricingWsdl: process.env.PRICING_WSDL,
    poWsdl: process.env.PO_WSDL,
    username: process.env.SOAP_USERNAME,
    password: process.env.SOAP_PASSWORD,
    supplierId: process.env.SUPPLIER_ID,
    timeout: 10000
  }
};