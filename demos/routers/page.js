const router = require('koa-router')()
const path = require('path')
const { uploadFile } = require('../util/upload')

// function parseQueryStr( queryStr ) {
//   let queryData = {}
//   let queryStrList = queryStr.split('&')
//   for (  let [ index, queryStr ] of queryStrList.entries()  ) {
//     let itemList = queryStr.split('=')
//     queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//   }
//   return queryData
// }

// function parsePostData(ctx) {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			let postdata = "";
//       ctx.req.addListener('data', (data) => {
//         postdata += data
//       })
//       ctx.req.addListener("end",function(){
//         let parseData = parseQueryStr( postdata )
//         resolve( parseData )
//       })
// 		} catch (err){
// 			reject(err)
// 		}
// 	})
// }

module.exports = router.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
	ctx.body = `<form method="POST" action="/page/postParam">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <input name="file" type="file" /><br/><br/>
        <button type="submit">submit</button>
      </form>`
}).get('/getParam', async ( ctx ) => {
	// 获得get参数的方式
	let url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring
  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
}).get('/getCookie', async (ctx) => {
  console.log('fadsfds')
  const cookieData = ctx.cookies.get('cid')
  console.log(cookieData)
  ctx.body = `cid cookie get ${cookieData}`
}).post('/postParam', async ( ctx )=>{
	// post获取参数
	// let postData = ctx.request.body
  let result = { success: false }
  let serverFilePath = path.join( __dirname, 'upload-files' )
  result = await uploadFile( ctx, {
    fileType: 'album', // common or album
    path: serverFilePath
  })
	// let postData = await parsePostData( ctx )
  ctx.body = result
})