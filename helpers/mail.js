const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host:'mail.mokine.cm',
    port: 465,
    tls:{
        rejectUnauthorized:false // important to avoir email sent error : self signed certificate in certificate chain
    },
    secure:true,
    auth: {
      user: 'mokine@mokine.cm',
      pass: 'mokine.cm237'
    }
  })
const sendMail = async (email,content,subject)=>{
    let mailOptions = {
        from: 'mokine@mokine.cm',
        to: email,
        subject: subject,
        text: content
      }
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Email sent error',error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}





module.exports={
    sendMail
}