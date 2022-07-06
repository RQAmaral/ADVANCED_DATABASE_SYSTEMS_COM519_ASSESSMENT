const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongo = require("./mongo");
var MongoClient = require('mongodb').MongoClient;
const schema = require("./schemas/room-schema");
const bodyParser = require("body-parser");
const { assert } = require("console");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}));

//Connect to the Database
const connectDB = async () => {
  await mongo().then(async (mongoose) =>{
    try{
      console.log("Successfuly Connected to DB")
    }catch{
      console.log("Error Connecting to DB")
    }
  })
};

database = connectDB();

//gets
app.get("/home", (req, res) => {
  schema.find({}, function(err, rooms){
    res.render("index", {
      roomsList: rooms
    })
  })
});

app.get("/", (req, res) => {
  schema.find({}, function(err, rooms){
    res.render("index", {
      roomsList: rooms
    })
  })
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/delete", (req, res) => {
  schema.find({}, function(err, rooms){
    res.render("delete", {
      roomsList: rooms
    })
  })
  });

app.get("/update", (req, res) => {
  schema.find({}, function(err, rooms){
    res.render("update", {
      roomsList: rooms
    })
  })
});

//Posts
//Add
app.post("/add", function(req,res){
  let newRoom = new schema({
    room : req.body.room,
    price: req.body.price,
    reservation : req.body.reservation,
    type : req.body.type
  })
  newRoom.save();
  res.redirect("/home");
})
//Update
app.post("/update_room", async function(req,res){
  await mongo().then(async (mongoose) =>{
    try{
      await schema.updateOne({
        room : req.body.room
      },{
        price: req.body.price,
        reservation : req.body.reservation,
        type : req.body.type
      })
    }catch{
      console.log("Error Connecting to DB")
    }
  })
  res.redirect("/home")
})
//Delete
app.post("/delete_reservation", async function(req,res){
  await mongo().then(async (mongoose) =>{
    try{
      await schema.deleteOne({
        room : req.body.room
      })
    }catch{
      console.log("Error Connecting to DB")
    }
  })
  res.redirect("/home")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});