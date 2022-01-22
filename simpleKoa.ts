import * as koa from "koa";
import * as Router from "koa-router"

const app = new koa();

const router = new Router();

router.get("/a", (context) => context.response.body = ("api a is invoked"));

app.use(router.routes());

app.listen(4000, () => console.log("simple koa server is created"));