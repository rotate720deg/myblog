const Koa = require('koa');
const Router = require('koa-router');
const parser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.cookies.set('cid','hellow world')
  ctx.body = '首页';
});


app.use(router.routes()).use(router.allowedMethods).listen(3000);
