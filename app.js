const express = require('express');
const app = express();
const { log } = console;
const fs = require("fs");

// Enables using the public folder with htmls
app.use(express.static(__dirname + '/public'));
// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const projectsRouter = require("./routes/projects.js");
const skillsRouter = require('./routes/skills.js');
const contactRouter = require('./routes/contact.js');

app.use(projectsRouter.router);
app.use(skillsRouter.router);
app.use(contactRouter.router);

// SSR 
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const skillspage = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");

const mailsent = fs.readFileSync(__dirname + "/public/mail/emailmessage.html", "utf-8");
const mailerror = fs.readFileSync(__dirname + "/public/mail/error.html", "utf-8");

// Endpoints
app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skillspage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});

app.get("/mailsent", (req, res) => {
    res.send(header + mailsent + footer);
});

app.get("/error", (req, res) => {
    res.send(header + mailerror + footer);
});

// Server setup:
const port = process.env.PORT ? process.env.PORT : 8088;
log(process.env.PORT);
app.listen(port, (error) => {
    if(error) {
        log(error);
    }
    else {
        log("Server @: " + port);
    }
})