const router = require('koa-router')({prefix: '/managers'});

/*
`get /managers`  增 `get /managers/create  post /managers/create` 删` get /managers/move`  改 `get  /managers/:managersId/edit  post /managers/:managersId/edit`
*/
router.get('/', async ctx => {
    ctx.body = '管理员';
});
router.get('/create', async ctx => {
    ctx.body = '管理员添加';
});
router.post('/create', async ctx => {
    ctx.body = '管理员添加';
});
router.post('/move', async ctx => {
    ctx.body = '管理员删除';
});
router.get('/:managersId/edit', async ctx => {
    ctx.body = '管理员修改';
});
router.post('/:managersId/edit', async ctx => {
    ctx.body = '管理员修改';
});

module.exports = router;
