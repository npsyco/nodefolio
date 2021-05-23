const router = require("express").Router();

const projects = [{
    title: "Nodefolio",
    description: "Personal portfolio implemented in Node.js",
    creationDate: new Date("2021-04-08"),
    /* endDate: new Date("2021-04-15"), */
    /* gitLink: "https://github.com/npsyco/nodefolio.git" */
}, 

{
    title: "Battlesheet",
    description: "Attempted implementations of this diceroller in different languages, currently Java. Aim is to create a diceroller used in DnD games. Will attempt to code in Node.js next!",
    /* creationDate: new Date("2020-08-01"), */
    /* endDate: Date.now, */
    /* gitLink: "https://github.com/npsyco/BattleSheet.git", */
},

{
    title: "Selinium AutoQA tester",
    description: "Experimenting with Selenium to automate website testing",
    /* creationDate: new Date("2021-02-28"), */
    /* endDate: Date.now, */
    /* gitLink: "https://github.com/npsyco/Selenium.git" */
}

];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};