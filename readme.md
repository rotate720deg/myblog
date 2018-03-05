## 从零搭建一个博客需要考虑的东西

### 技术架构

1. 我需要考虑技术选型，从以下三个方面来考虑：自己所掌握的技术，博客上线的时间点，自己能拿出来的闲余时间。所以通过比较，技术选型为`nodejs+koa+mongodb+jq+handlebars`
2. 选用ESlint来规范代码

### 后端思考

因为是第一次写后端 项目搭建初期，后台部分的摸索：
1. 后端要用到的功能模块，数据库驱动（mongoose），session中间件（koa-session2），配置文件整合（用来区分环境不同配置config）,post 请求解析（koa-bodyparser），静态资源（koa-static），文件上床（busboy）等
2. 对于我来说，比较难得功能模块，登录注册（先做一个隐藏得登录页面？），上传
3. 主要还是要注意后端部分代码的逻辑思想，这是不同于前端代码的。

### 路由设计
使用restful原则设计，资源目录一目了然
1. 后台管理页：get /server
1. 注册页：`get /signup    post /signup`
2. 登录页：`get /signin     post /signin`
3. 登出：   ` post /signout`
4. 文章管理：`get /posts/manager`    增 `get /posts/create  post /posts/create` 删` get /posts/move`  改 `get  /posts/:postsId/edit  post /posts/:postId/edit`
5. 广告管理：`get /advertisement` 增 `get /advertisement/create  post /advertisement/create` 删` get /advertisement/move`  改 `get  /advertisement/:advertisementId/edit  post /advertisement/:advertisementId/edit`
6. 管理员：`get /managers`  增 `get /managers/create  post /managers/create` 删` get /managers/move`  改 `get  /managers/:managersId/edit  post /managers/:managersId/edit`
7. 前端首页： `get /   /index`
8. 文章页：`get /posts/:postsId`
9. 文章分类页：`get /posts/:classification`

