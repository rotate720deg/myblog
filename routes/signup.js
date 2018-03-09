const router = require('koa-router')();
const Check = require('../middlewares/check');

router.get('/signup', Check.checkLogin, ctx => {
    ctx.body = '注册'
});

router.post('/signup', Check.checkLogin, async ctx => {
    ctx.body = '注册信息提交'
})

module.exports = router;
