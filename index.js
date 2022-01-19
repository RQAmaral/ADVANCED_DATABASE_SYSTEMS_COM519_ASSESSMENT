const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongo = require("./mongo");
const schema = require("./schemas/room-schema");
const bodyParser = require("body-parser");

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

connectDB();

//Create new room registry
/*const create=(req,res)=>{
  
  // new room
  const room = new rooms({
      room : req.body.room,
      price: req.body.price,
      reservation : req.body.reservation,
      type : req.body.type
  })

  //add room to DB
  await new schema(room).save()
  room.then(data => {
          res.redirect('/add');
      })
      .catch(err =>{
          res.status(500).send({
              message : err.message || "Error occurred"
          });
      });
}



*/

//gets
app.get("/home", (req, res) => {
  schema.find({}, function(err, rooms){
    res.render("index", {
      roomsList: rooms
    })
  })
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/about", (req, res) => {
    res.render("about");
  });

app.get("/contacts", (req, res) => {
  res.render("update");
});

//posts
app.post("/", function(req,res){
  let newRoom = new schema({
    room : req.body.room,
    price: req.body.price,
    reservation : req.body.reservation,
    type : req.body.type
  })
  newRoom.save();
  res.redirect("/home");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

