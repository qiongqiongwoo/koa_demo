const Koa = require('koa') // koa v2
const loggerAsync  = require('./middleware/logger-async')
const router  = require('./routers/index')

const app = new Koa()
// const fs = require('fs')

app.use(loggerAsync())

// app.use(( ctx ) => {
//     ctx.body = 'hello world!'
// })

// const render = ( page ) => {
//   return new Promise(( resolve, reject ) => {
//     let viewUrl = `${__dirname}/views/${page}`
//     fs.readFile(viewUrl, "binary", ( err, data ) => {
//       if ( err ) {
//         reject( err )
//       } else {
//         resolve( data )
//       }
//     })
//   })
// }

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

app.use(router.routes()).use(router.allowedMethods())

// app.use(async ( ctx ) => {
// 	let url = ctx.request.url
// 	let html = await appRoute(url)
//   ctx.body = html
// })

app.listen(3000, () => {
	console.log('the server is starting at port 3000')
})
