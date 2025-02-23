const {Router} = require("express");
const messages = [];
const title = "Mini Message Board";

const formRouter = Router();

formRouter.get("/", (req, res) => {
    res.render("form");
});

formRouter.post("/", (req, res) => {
    const body = req.body;
    console.log("Body params", body.text, body.user);
    messages.push({
        text: body.text,
        user: body.user,
        added: `${new Date().getDate()}-${months[new Date().getUTCMonth()]}-${new Date().getFullYear()}`
    });
    res.redirect("/");
});

function makeUser(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Sept", "Oct", "Nov", "Dec"];

for (let i = 0; i < 5; i++) {
    const message = {
        text: `Hi, there ${i + 1}`,
        user: `${makeUser(7)}`,
        added: `${new Date().getDate()}-${months[new Date().getUTCMonth()]}-${new Date().getFullYear()}`
    };
    messages.push(message);
}

module.exports = {title, messages, formRouter};