const express = require("express");
const path = require("node:path");
const app = express();
const PORT = process.env.PORT || 3000;

const {title, messages, formRouter} = require("./routes/messagesRouter");
const messagesRouter = require("./routes/messagesRouter");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/new", formRouter);

app.get("/", (req, res) => {
    console.log("Index route: '/'");
    res.status(200).render("index", {title, messages});
});
app.get("/new", (req, res) => {
    console.log("Route: '/new'");
    res.render("form");
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});