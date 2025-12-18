const express = require('express')
const router = express.Router()
// controller
const muridMiddleware = require('../middlewares/muridMiddleware')
const muridController = require("../controllers/muridController")

router.get("/pendidikan", muridMiddleware, muridController.GetLastPendidikanMurid)

module.exports = router