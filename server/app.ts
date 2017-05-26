import * as koa from "koa";
import * as cors from 'koa2-cors';
import * as koabody from "koa-body";
import { router } from "./router/index"
import dbInit from './db'

dbInit();

let app = new koa();

app.use(cors());
app.use(koabody());

app.use(router.routes());
app.use(router.allowedMethods());

let port = 3002;
app.listen(port);
console.log("the server is listen on the port:" + port);

export = app
