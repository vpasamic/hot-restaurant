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
let reservations=[{
    name:"",
    phone:"",
    email:"",
    id:"",
}];


let waitlist=[];





app.listen(PORT,function()){
    console.log("app listening on Port " + PORT)
}