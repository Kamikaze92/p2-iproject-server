
const router = require("express").Router();
const routerAuthentication = require('./authenticationRoutes')
const routerThread = require('./threadRoutes.js')
const routerComment = require('./commentRoutes.js')
const routeQuote = require('./quoteRoutes.js');
const Authenticate = require('../middlewares/authenticate');
const routerSpotify = require('./spotifyRoutes')

// ? router authentication (login,register,login spotify)
router.use('/authentication', routerAuthentication)

// ? router qoute
router.use('/quote', routeQuote)

// ? router to spotify
router.use('/spotify', routerSpotify)

router.use(Authenticate)

// ? router thread
router.use('/thread', routerThread)

// ? router comment
router.use('/comment', routerComment)



module.exports = router