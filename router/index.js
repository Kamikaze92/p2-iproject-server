
const router = require("express").Router();
const routerAuthentication = require('./authenticationRoutes')
const routerThread = require('./threadRoutes.js')
const routerComment = require('./commentRoutes.js')
const routeQuote = require('./quoteRoutes.js')


router.use('/authentication', routerAuthentication)

router.use('/thread', routerThread)

router.use('/comment', routerComment)
router.use('/quote', routeQuote)


module.exports = router