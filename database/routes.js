let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/bigO')
  .get(controllers.getMaterial)
  .post(controllers.postMaterial)


module.exports = router