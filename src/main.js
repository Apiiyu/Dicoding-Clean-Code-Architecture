const createServer = require("./infrastructure/http/createServer");
const container = require("./infrastructure/service-container");
require("dotenv").config();

const init = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
