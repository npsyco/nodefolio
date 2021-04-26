const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/home.html");
})

app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects/projects.html");
})

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