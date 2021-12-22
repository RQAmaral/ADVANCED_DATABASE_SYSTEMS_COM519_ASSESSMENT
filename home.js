const http = require("http");
const server = http.createServer();
const { MongoClient } = require("mongodb");

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

server.on("request", async (req, res) => {
    try{
    const { method, url, headers } = req;

    console.log(method);
    console.log(url);
    console.log(headers);
    res.end("hello, Bu");

    } catch(e) {
        console.log('Could not update ${e}');

    }
});

server.listen(8080);