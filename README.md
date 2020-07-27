# template_server（搭配 template_admin 快速构建基础管理后台系统）

## 项目技术
### Koa2 + Koa-router + Sequelize + mysql + Joi
> Koa2          应用程序
> Koa-router    路由管理
> Sequelize     数据库建模
> mysql         数据库
> Joi           数据验证模型

### 项目结构
> logs 日志文件
> src 项目业务代码
> > config          工程配置文件
> > controller      控制器
> > joi             数据验证模型
> > model           数据库模型
> > router          路由
> > utils           工具库
> > app.js          入口文件

> start.js 启动文件

## 启动命令
> npm start
> 失败，全局安装 nodemon  命令： npm install nodemon -g

## 生产环境部署
> 按照npm2
> 进入到到项目根目录安装npm包
> 输入 pm2 start pm2.config.js，用pm2 维护serve进程

## 待办
> 集成swagger-ui
> jwt鉴权