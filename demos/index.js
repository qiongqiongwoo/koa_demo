const Koa = require('koa') // koa v2
const loggerAsync  = require('./middleware/logger-async')
const bodyParser = require('koa-bodyparser')
const router  = require('./routers/index')
const static = require('koa-static')

const views = require('koa-views')
const path = require('path')


const app = new Koa()

const staticPath = './static'

// const fs = require('fs')
// log
app.use(loggerAsync())
// post参数解析中间件
app.use(bodyParser())

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))


// app.use(( ctx ) => {
//     ctx.body = 'hello world!'
// })

// const appRoute = async ( url ) => {
//   let view = '404.html'
//   switch ( url ) {
//     case '/':
//       view = 'index.html'
//       break
//     case '/index':
//       view = 'index.html'
//       break
//     case '/todo':
//       view = 'todo.html'
//       break
//     case '/404':
//       view = '404.html'
//       break
//     default:
//       break
//   }
//   let html = await render( view )
//   return html
// }

app.use(static(__dirname+'/static'));
app.use(router.routes()).use(router.allowedMethods())

// app.use(async ( ctx ) => {
// 	let url = ctx.request.url
// 	let html = await appRoute(url)
//   ctx.body = html
// })
module.exports = app

app.listen(3000, () => {
	console.log('the server is starting at port 3000')
})
