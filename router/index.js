
const router = require("express").Router();
const routerAuthentication = require('./authenticationRoutes')
const routerThread = require('./threadRoutes.js')
const routerComment = require('./commentRoutes.js')
const routeQuote = require('./quoteRoutes.js')

// ? router authentication (login,register,login spotify)
router.use('/authentication', routerAuthentication)

// ? router thread
router.use('/thread', routerThread)

// ? router comment
router.use('/comment', routerComment)

// ? router qoute
router.use('/quote', routeQuote)


module.exports = router