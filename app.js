const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const routers = require("./src/routers/player");
require("./src/db/conn");

app.use(bodyParser());
app.use(routers.routes());
app.use(routers.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});