const router = require('koa-router')()
const fs = require('fs')

const render = ( page ) => {
  return new Promise(( resolve, reject ) => {
    let viewUrl = `${__dirname}/../views/${page}`
    fs.readFile(viewUrl, "binary", ( err, data ) => {
      if ( err ) {
        reject( err )
      } else {
        resolve( data )
      }
    })
  })
}

module.exports = router.get('/', async ( ctx )=>{
  // let html = await render('index.html')
  ctx.cookies.set(
    'cid',
    'cid cookie value',
    {
      domain: 'localhost',  // 写cookie所在的域名
      path: '/',       // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )
  // ctx.body = html
  let title = 'hello koa ejs'
  let header = 'test ejs module'
  await ctx.render('index', {
    title, header
  })
})