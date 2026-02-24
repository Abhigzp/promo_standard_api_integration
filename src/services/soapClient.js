const soap = require("soap");
const config = require("../config");
const logger = require("../utils/logger");

let client;

const clients = {};

async function getSoapClient(wsdlUrl) {

  if (!wsdlUrl) {
    throw new Error("WSDL URL is required");
  }

  if (clients[wsdlUrl]) {
    return clients[wsdlUrl];
  }

  const client = await soap.createClientAsync(wsdlUrl, {
    timeout: config.soap.timeout
  });

  client.setSecurity(
    new soap.BasicAuthSecurity(
      config.soap.username,
      config.soap.password
    )
  );

  clients[wsdlUrl] = client;

  return client;
}

module.exports = getSoapClient;