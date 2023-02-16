import { Application, Router, require } from "./dep.js";

import { connect } from "./config/db.js";
// const categoryController = require("./controllers/category.controller.js");

const app = new Application();
import categoryRoutes from "./routes/category.routes.js";

app.use(categoryRoutes.routes());
app.use(categoryRoutes.allowedMethods());

async function server() {
  console.log("Listening on port 2233");
  connect();
  await app.listen({ port: 2233 });
}

server();
