function log( ctx ) {
	console.log('LOG:', ctx.method, ctx.header.host + ctx.url )
}
module.exports = function () {
  return async function ( ctx, next ) {
     log(ctx)
     await next()
  }
}

