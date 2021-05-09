const router = require("express").Router();
const nodemailer = require("nodemailer");
const { log } = console;
// Enables using .env file for personalized input (ie. email address and password) without sharing - please create a .env file and insert your own credentials 
require("dotenv").config();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));


let transport = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

router.post("/api/contact", (req, res) => {
    let mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: process.env.MAIL_USER,
        subject: req.body.subject,
        text: req.body.text
    };

    transport.sendMail(mailOptions, (error, data) => {
        if(error) {
            return log(error);         
        }
        log('mail sent: ', data.messageId)
    });

    setTimeout(() => {
        res.redirect("/");
    }, 2500);
})


module.exports = {
    router
};