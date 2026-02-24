const soap = require("soap");
const config = require("../config");
const logger = require("../utils/logger");

let client;

async function getSoapClient(wsdlUrl) {
  if (client) return client;

  client = await soap.createClientAsync(wsdlUrl, {
    timeout: config.soap.timeout
  });

  client.setSecurity(
    new soap.BasicAuthSecurity(
      config.soap.username,
      config.soap.password
    )
  );

  client.on("request", xml => logger.info({ request: xml }));
  client.on("response", xml => logger.info({ response: xml }));

  return client;
}

module.exports = getSoapClient;