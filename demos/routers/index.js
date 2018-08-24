const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const page = require('./page')
// const static = require('./static')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
// router.use('/static/*', static.routes(), static.allowedMethods())

module.exports = router