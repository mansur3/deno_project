import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { createRequire } from "https://deno.land/std@0.177.0/node/module.ts";
import * as Validator from "https://deno.land/x/validator/mod.ts";

const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

export { Application, Router, mongoose, require, Validator };

// export {  };
// export { Application, Router, require };
