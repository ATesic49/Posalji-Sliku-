const express = require('express');
const router =express.Router()
const nodemailer  = require('nodemailer');
router.use(express.static('public'))

router.get('/',(req,res)=>{
    res.render('homePage')
})


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aleksasmailsender@gmail.com',
        pass:'ynqrwffqziiimzms'
    }
})



router.use(express.static('public'))

module.exports = router