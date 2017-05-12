"use strict";
var koa = require("koa");
var koabody = require("koa-body");
var index_1 = require("./router/index");
var app = new koa();
app.use(koabody());
app.use(index_1.router.routes());
app.use(index_1.router.allowedMethods());
app.listen(3001);
console.log("the server is listen on the port:" + 3001);
module.exports = app;
//# sourceMappingURL=app.js.map