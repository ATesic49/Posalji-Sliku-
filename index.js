if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express")
const app =express()
const expressLayouts = require("express-ejs-layouts")
const homeRoute= require('./routes/homeRoute')
const abotUsRoute = require('./routes/aboutUsRoute');
const bodyParser = require('body-parser');
const sendRoute = require('./routes/sendRoute');
const nodemailer = require('nodemailer');
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout.ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',homeRoute)
app.use('/about-us',abotUsRoute)
app.use('/send',sendRoute)

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aleksasmailsender@gmail.com',
        pass:'ynqrwffqziiimzms'
    }
})
app.post('/sendEmail',(req,res)=>{
    const mailOptions = {
        from:'aleksasmailsender@gmail.com',
        to:req.body.gmailzagmail,
        subject:req.body.imezagmail,
        text:req.body.porukazagmail
    }

    transporter.sendMail(mailOptions,(err,info)=>{
        if (err) {
            console.log(err)
        }else{
            console.log(info)
        }
    })
})




app.listen(process.env.PORT || 3000)
