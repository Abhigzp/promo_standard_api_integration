const getClient = require("../config/soapClient");
const ApiLog = require("../models/apiLog.model");

async function getProduct() {
  const client = await getClient();

  const args = {
    wsVersion: "1.0.0",
    id: process.env.SUPPLIER_ID
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

module.exports = { getProduct };