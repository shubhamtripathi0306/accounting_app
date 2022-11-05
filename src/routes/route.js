const express = require('express')
const router = express.Router()
const{userRegistration} = require('../controllers/personController')
const{companyRegistration} = require('../controllers/companyController')


router.post('/userSignUp', userRegistration)

router.post('/companySignUp', companyRegistration)



module.exports = router