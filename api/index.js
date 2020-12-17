const Koa = require("koa");
const logger = require("koa-logger");
const Router = require("koa-router");
const koaBody = require("koa-body");
const path = require("path");
const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx, next) => {
  ctx.res.setHeader("Content-Type", "application/json;charset=UTF-8");
  ctx.res.setHeader("Access-Control-Allow-Credentials", "true");
  ctx.res.setHeader("Access-Control-Allow-Origin", "*");
  ctx.res.setHeader(
    "Access-Control-Allow-Headers",
    "x-requested-with,Content-Type,token,Authorization"
  );
  await next();
});

router.post('/api/test',(ctx,next)=>{
  ctx.body = JSON.stringify({
    code:0,
    msg: 'success',
    data: 'OK'
  })
});
router.get('/api/test',(ctx,next)=>{
  ctx.body = JSON.stringify({
    code:0,
    msg: 'success',
    data: 'OK'
  })
})

app.use(logger());
app.listen(4200, () => {
  console.log("mock server start!");
});

