const router = require('koa-router')({prefix: '/posts'});

/*
`get /posts/manager`
增 `get /posts/create  post /posts/create`
删` get /posts/move`
改 `get  /posts/:postsId/edit  post /posts/:postId/edit`
`get /posts/:postsId`
*/
router.get('/manager', async ctx => {
    ctx.body = '文章管理'
});
router.get('/create', async ctx => {
    ctx.body = '文章创建'
});
router.post('/create', async ctx => {
    ctx.body = '文章创建'
});
router.post('/move', async ctx => {
    ctx.body = '文章删除'
});
router.get('/:postsId/edit', async ctx => {
    ctx.body = '文章编辑'
});
router.post('/:postsId/edit', async ctx => {
    ctx.body = '文章编辑'
});
router.get('/:postsId', async ctx => {
    ctx.body = '具体文章'
});
router.get('/classification/:classificationId', async ctx => {
    ctx.body = '文章分类'
});

module.exports = router;
