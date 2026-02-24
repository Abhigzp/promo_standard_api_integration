const getClient = require("../config/soapClient");
const ApiLog = require("../models/apiLog.model");
const config = require("../config");
const retry = require("../utils/retry");
const getSoapClient = require("./soapClient");
async function getProduct() {
  const args = {
    wsVersion: "1.0.0",
    id: config.soap.supplierId
  };

  try {
    const result = await retry(async () => {
      const client = await getSoapClient(config.soap.inventoryWsdl);
      const [response] = await client.GetProductAsync(args);
      return response;
    });

    await ApiLog.create({
      endpoint: "GetProduct",
      requestPayload: args,
      responsePayload: result,
      status: "success"
    });

    return result;

  } catch (error) {

    await ApiLog.create({
      endpoint: "GetProduct",
      requestPayload: args,
      responsePayload: error.message,
      status: "error"
    });

    throw error;
  }
}
async function getInventory() {
  const client = await getClient(process.env.INVENTORY_WSDL);

  const args = {
    wsVersion: "1.0.0",
    supplierID: process.env.SUPPLIER_ID
  };

  const [result] = await client.GetInventoryAsync(args);

  return result;
}

module.exports = { getProduct , getInventory};