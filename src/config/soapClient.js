const soap = require("soap");

async function getClient(wsdlUrl) {
  const client = await soap.createClientAsync(wsdlUrl);

  client.setSecurity(
    new soap.BasicAuthSecurity(
      process.env.SOAP_USERNAME,
      process.env.SOAP_PASSWORD
    )
  );

  return client;
}

module.exports = getClient;