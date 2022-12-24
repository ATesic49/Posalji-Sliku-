const express = require('express');
const router =express.Router()
const nodemailer  = require('nodemailer');
router.use(express.static('public'))

router.get('/',(req,res)=>{
    res.render('naruciPage')
})


router.use(express.static('public'))

module.exports = router