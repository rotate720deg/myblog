const Koa = require('koa');
const Router = require('koa-router');
const Session = require('koa-session');
const Check = require('./middlewares/check');

const app = new Koa();
const router = new Router();
app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false) */
};

app.use(Session(CONFIG, app));
router.get('/', Check.checkLogin, async (ctx) => {
    ctx.body = '首页';
});
router.get('/signup', async (ctx) => {
    console.log(ctx._matchedRoute)
    ctx.body = '注册页';
});
router.get('/signin', async (ctx) => {
    ctx.body = '登录页';
});
// 命名路由
router.get('aaa', '/users/:id', (ctx, next) => {
    console.log(ctx.params.id)
    ctx.body = 'url3';
});

router.url('aaa', 3);

// 嵌套路由
const Post = new Router();
Post.get('/:id', async ctx => {
    ctx.body = '111111';
})

router.use('/aaa/:id', Post.routes());

app.use(router.routes()).use(router.allowedMethods()).listen(3000);
