module.exports = {
    // 先做登录检查
    async checkNotLogin  (ctx, next) {
        console.log(ctx.session)
        if (!ctx.session.user) {
            // 这里应该跳转到登录页
            // ctx.body = '没有登录';
            return ctx.redirect('/signin');
        }
        next();
    },
    async checkLogin  (ctx, next) {
        console.log(ctx.session)
        if (ctx.session.user) {
            // 已登录，跳转到上一页
            ctx.body = '有登录';
            return ctx.redirect('/posts/manager');
        }
        next();
    }
}
