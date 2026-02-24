const getClient = require("../config/soapClient");
const ApiLog = require("../models/apiLog.model");
const config = require("../config");
const retry = require("../utils/retry");
const getSoapClient = require("./soapClient");
async function getProduct() {

  if (!process.env.PRODUCT_WSDL) {
    throw new Error("PRODUCT_WSDL is not defined in .env");
  }

  const args = {
    wsVersion: "1.0.0",
    id: config.soap.supplierId
  };

  try {
    const result = await retry(async () => {

      const client = await getClient(process.env.PRODUCT_WSDL);

      console.log("Available methods:", Object.keys(client));

      const [response] = await client.getProductAsync(args); // lowercase!

      return response;
    });

    return result;

  } catch (error) {
    throw error;
  }
}
async function getInventory(productId) {
  const client = await getClient(process.env.INVENTORY_WSDL);
  console.log("SOAP client created for inventory" , client.getInventoryLevels);
  const args = {
    wsVersion: "1.2.1",
    supplierID: process.env.SUPPLIER_ID,
    password: process.env.SOAP_PASSWORD,
    productId: productId
  };
// getInventoryLevels()
  const [result] = await client.getInventoryLevelsAsync(args);

  return result;
}

module.exports = { getProduct , getInventory};