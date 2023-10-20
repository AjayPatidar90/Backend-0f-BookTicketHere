const express = require('express')
const router = express.Router()
const controller = require("../Controller/MovieController")

router.post("/booking", controller.storeBooking)
router.get("/bookingDetail", controller.getBooking)

module.exports = router