const router = require('koa-router')();
const Check = require('../middlewares/check');

// router.get('/signin', Check.checkLogin, ctx => {
//     ctx.render('sigin');
// });

router.get('/signin', ctx => {
    ctx.render('signin');
});

router.post('/signin', Check.checkLogin, ctx => {
    ctx.render('sigin');
})

module.exports = router;
