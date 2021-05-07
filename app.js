const express = require('express');
const app = express();



app.use(express.static('public'));
/* app.use(express.json());
app.use(express.urlencoded({ extended: true })); */


const projectsRouter = require('./routes/projects.js');
const contactRouter = require('./routes/contact.js');

app.use(projectsRouter.router);
app.use(contactRouter.router);

const fs = require("fs");

// SSR 
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");


app.get("/", (req, res) => {
    res.send(header + projectspage + footer);
})


app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
})


app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
})




// Server setup:
const port = process.env.PORT ? process.env.PORT : 8088;
console.log(process.env.PORT);
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    else {
        console.log("Server @: " + port);
    }
})