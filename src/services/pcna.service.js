const getClient = require("../config/soapClient");
const ApiLog = require("../models/apiLog.model");

async function getProduct() {
  const client = await getClient(process.env.INVENTORY_WSDL);
  console.log("SOAP Client Initialized" , client.describe());

  const args = {
    wsVersion: "1.0.0",
    supplierID: process.env.SUPPLIER_ID
  };

  try {
    const [result] = await client.GetProductAsync(args);

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