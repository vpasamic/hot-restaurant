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
let tables = {
    reservations:[
        {
        name:"dragon",
        id:"something",
        number:123456,
        }
    ],
    waitlist:[
        {
            name:"dinosaur",
            id:"something",
            number:123456,
            }
    ],
}


// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserves", (req, res) => {
    res.sendFile(path.join(__dirname, "reserves.html"));
});

app.get("/api/tables", function (req, res){
    res.json(tables.reservations)
})

app.get("/api/waitlist", function (req,res){
    res.json(tables.waitlist)
})
app.get("/api/", function (req,res){
    res.json(tables)
})
app.post("/api/newtable",function(req,res){
    let newtable = req.body;
    if (reservations.length<6){
        reservations.push(newtable)
    }else{
        waitlist.push(newtable)
    }
    res.json(newtable)
    

});

app.listen(PORT,function(){
    console.log("app listening on Port " + PORT)
})