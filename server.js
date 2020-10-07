// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up variable
let reservations=[
    {
    name:"dragon",
    id:"something",
    number:123456,
    }

];
let waitlist=[];



// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res){
    res.json(reservations)
})

app.get("/api/waitlist", function (req,res){
    res.json(waitlist)
})

app.post("/api/newtable",function(req,res){
    let newtable = req.body;
    if (reservations.length<5){
        reservations.push(newtable)
    }else{
        waitlist.push(newtable)
    }
    res.json(newtable)
    

});

app.listen(PORT,function(){
    console.log("app listening on Port " + PORT)
})