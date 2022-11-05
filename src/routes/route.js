const express = require('express')
const router = express.Router()
const {adminLogin,adminSignUp}= require("../controllers/adminController")
const { createfeedback, updatefeedback, deleteFeedback}= require("../controllers/feedbackController")


router.post('/createProduct', createProduct)


module.exports = router