const router = require('koa-router')();
const Check = require('../middlewares/check');

router.get('/signin', Check.checkLogin, ctx => {
    ctx.redirect('/posts/manager')
});

router.post('/signin', Check.checkLogin, ctx => {
    // ctx.redirect('/posts/manager')
})

module.exports = router;
