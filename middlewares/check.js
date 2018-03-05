module.exports = {
    // 先做登录检查
    async checkLogin  (ctx, next) {
        console.log(ctx.session)
        if (!ctx.session.user) {
            ctx.session.user = 'yeye';
            ctx.body = '没有登录';
            return;
        }
        next()
    }
}
