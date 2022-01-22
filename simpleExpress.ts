import * as express from "express"

const app = express();

const router = express.Router();
router.get("/a", (request, respose) => respose.send("api a is invoked"));

app.use(router);

app.listen(process.env.PORT || 3000, () => console.log("simple express sever is created"));

/**
 * express -  router is inbuilt
 */