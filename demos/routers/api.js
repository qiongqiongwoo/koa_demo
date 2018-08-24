const router = require('koa-router')()

module.exports = router.get('/get/data.json', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: 'my name is koa.js!'
  }
}).get('/get/user.json', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: 'my name is koa.js!'
  }
})