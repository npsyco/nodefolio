const router = require("express").Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/api/contact", (req, res) => {
    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: 'christian.nymark@gmail.com',
        subject: req.body.subject,
        html:req.body.message
        };
});


// Nodemailer

const mailtrans = mailer.createTransport({
    service: 'gmail',    
    /* host: 'smtp.gmail.com',
    port: 465,
    secure: true, */
    
auth: {
    //type: '0A',
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
}
});



mailtrans.sendMail(mailOptions, function(error, info){
if(error) {
    console.log(error);
} else {
    console.log('Mail sent:' + info.response);
    res.send("Mail sent");
}
});


module.exports = {
    router
};