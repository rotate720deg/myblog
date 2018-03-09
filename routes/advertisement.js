const router = require('koa-router')({prefix: '/advertisement'});

/*
`get /advertisement` 增 `get /advertisement/create  post /advertisement/create` 删` get /advertisement/move`  改 `get  /advertisement/:advertisementId/edit  post /advertisement/:advertisementId/edit`
*/

router.get('/', async ctx => {
    ctx.body = '广告管理';
});
router.get('/create', async ctx => {
    ctx.body = '广告创建';
});
router.post('/create', async ctx => {
    ctx.body = '广告创建';
});
router.post('/move', async ctx => {
    ctx.body = '广告删除';
});
router.get('/:advertisementId/edit', async ctx => {
    ctx.body = '广告修改';
});
router.post('/:advertisementId/edit', async ctx => {
    ctx.body = '广告修改';
});

module.exports = router;
