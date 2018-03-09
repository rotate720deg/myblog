const router = require('koa-router')();
const Check = require('../middlewares/check');

router.post('/signout', Check.checkNotLogin, ctx => {
    ctx.redirect('/posts/manager')
})

module.exports = router;
