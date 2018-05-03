const Koa = require('koa');
const path = require('path');
const Router = require('./routes/index');
const Session = require('koa-session');
const Render = require('koa-art-template');
const Static = require('koa-static');

const app = new Koa();
app.keys = ['some secret hurr'];

// 静态资源
app.use(Static(
    path.join(__dirname, 'public')
));
// 模板引擎
Render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
});

// session
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

app.use(Router.routes()).listen(3000);
