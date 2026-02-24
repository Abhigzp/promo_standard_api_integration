const soap = require("soap");

let client;

async function getClient() {
  if (client) return client;

  client = await soap.createClientAsync(process.env.SOAP_WSDL_URL);

  client.setSecurity(
    new soap.BasicAuthSecurity(
      process.env.SOAP_USERNAME,
      process.env.SOAP_PASSWORD
    )
  );

  return client;
}

module.exports = getClient;