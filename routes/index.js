const router = require('koa-router')();
const singin = require('./signin');
const singup = require('./signup');
const singout = require('./signout');
const posts = require('./posts');
const advertisement = require('./advertisement');
const manager = require('./manager');

router.use(singin.routes())
    .use(singin.routes())
    .use(singup.routes())
    .use(singout.routes())
    .use(posts.routes())
    .use(manager.routes())
    .use(advertisement.routes());

module.exports = router;
