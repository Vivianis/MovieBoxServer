"use strict";
const koa = require("koa");
const cors = require("koa2-cors");
const koabody = require("koa-body");
const index_1 = require("./router/index");
let app = new koa();
app.use(cors());
app.use(koabody());
app.use(index_1.router.routes());
app.use(index_1.router.allowedMethods());
let port = 3002;
app.listen(port);
console.log("the server is listen on the port:" + port);
module.exports = app;
//# sourceMappingURL=app.js.map