const express = require('express');
const router =express.Router()
const multer = require('multer');
const nodemailer  = require('nodemailer');
const mongoose  = require('mongoose'); 
const path = require('path');
router.use(express.static('public'))


const upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'public/images')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+path.extname(file.originalname))
        }

    }),
    fileFilter:(req,file,cb)=>{
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/bmp' || file.mimetype === 'image/gif' || file.mimetype === 'image/x-png'){
            cb(null,true)
        }else{
            cb(null,false)
        error= 'Please Select an Image File'

        }
    }
})

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aleksasmailsender@gmail.com',
        pass:'ynqrwffqziiimzms'
    }
})
let error
router.get('/',(req,res)=>{
    res.render('sendPage',{
        error:error,
        valueForEmail:'atesic7@gmail.com',
    })
})

router.post('/',upload.array('images',150),(req,res)=>{
    error = ''
   
    let fileNameArray=[]
     req.files.forEach(file=>{
        fileNameArray.push(file.filename)
    })
let attachments =[]
fileNameArray.forEach(fileName=>{
const attachment = {filename:fileName,path:path.join('public/images',fileName)}
attachments.push(attachment)
})
console.log(attachments)
    const mailOptions = {
        from:'aleksasmailsender@gmail.com',
        to:req.body.sendersGmail,
        subject:'Slike Za Stampanje',
        text:`Broj Kopija:${req.body.numberOfCopies}`,
        attachments:attachments
    }


    transporter.sendMail(mailOptions,(err,info)=>{
        if (err) {
            console.log(err)
        }else{
            console.log(info)
        }
    });






res.render('imageUploaded',{
imgSrc:fileNameArray,
email:req.body.sendersGmail,
numberOfCopies:req.body.numberOfCopies
})

})




module.exports = router