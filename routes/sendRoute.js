const express = require('express');
const router =express.Router()
const multer = require('multer');
const nodemailer  = require('nodemailer');
const mongoose  = require('mongoose'); 
const path = require('path');
const fs = require('fs');
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
        valueForEmail:req.body.sendersGmail,
    })
})

router.post('/',upload.array('images',250),(req,res)=>{
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
if (attachments.length>=4){

for (let i = 0; i < attachments.length; i=i+4) {
    const realAttachments = attachments.slice(i,i+4)
    console.log( realAttachments)

    const mailOptions = {
        from:'aleksasmailsender@gmail.com',
        to:req.body.sendersGmail,
        subject:'Slike Za Stampanje',
        text:`Broj Kopija:${req.body.numberOfCopies};
        Adresa:${req.body.VasaUlica},${req.body.opstinaStanovanja};
        Broj Tel.:${req.body.brojTel}
        Cena:${req.body.numberOfCopies*req.body.dimenzije*req.files.length}dinara`,
        attachments:realAttachments
    }


    transporter.sendMail(mailOptions,(err,info)=>{
        if (err) {
            console.log(err)
        }else{
            console.log(info)
        }
    });
}



  
}else{


    const mailOptions = {
        from:'aleksasmailsender@gmail.com',
        to:req.body.sendersGmail,
        subject:'Slike Za Stampanje',
        text:`Broj Kopija:${req.body.numberOfCopies};
        Adresa:${req.body.VasaUlica},${req.body.opstinaStanovanja};
        Broj Tel.:${req.body.brojTel}
        Cena:${req.body.numberOfCopies*req.body.dimenzije*req.files.length}dinara`,
        attachments:attachments
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if (err) {
            console.log(err)
        }else{
            console.log(info)
        }
    });

}


res.render('imageUploaded',{
imgSrc:fileNameArray,
email:req.body.sendersGmail,
numberOfCopies:req.body.numberOfCopies
})
})
module.exports = router