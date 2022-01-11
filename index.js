const http = require("http");
const server = http.createServer();
const { MongoClient } = require("mongodb");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
  });

app.get("/contact", (req, res) => {
  res.render("contacts");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const url = "mongodb+srv://Rodrigo:alter130799@cluster0.owzic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dbName = "test";
const client = new MongoClient(url, {useNewUrlParser: true});
const students = [
    {
        name: {first: "Rodrigo", last: "Amaral"},
        dob: new Date("July 13, 1999")
    },
    {
        name: {first: "Bruna", last: "Cunha"},
        dob: new Date("September 11, 1999")
    },
];