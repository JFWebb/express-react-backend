///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// express & express app
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const cors = require('cors');


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// json files
// json files are only arrays/objects, and do not need to be exported in their main file
const projects = require("./projects.json");
const about = require("./about.json");


///////////////////////////////
// MOUNT MIDDLEWARE
///////////////////////////////
app.use(cors());

///////////////////////////////
// MOUNT ROUTES
///////////////////////////////
app.get('/', (req, res) => {
    res.send("Hello World");
});

///////////////////////////////
// Tell Express to  Listen
///////////////////////////////
app.listen(PORT, () => {
    console.log(`Express is listneing on port ${PORT}`)
});