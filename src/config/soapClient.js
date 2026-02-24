const soap = require("soap");
const config = require("./index");

async function getClient(wsdlUrl) {
  const client = await soap.createClientAsync(wsdlUrl, {
    timeout: 10000, // 10 sec timeout
  });

  client.setSecurity(
    new soap.BasicAuthSecurity(
      config.soap.username,
      config.soap.password
    )
  );

  return client;
}

module.exports = getClient;