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
// home route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// rout eto retrieve projects
app.get('/projects', (req, res) => {
    res.send(projects);
});

// route for retrieving about info
app.get('/about', (req, res) => {
    res.send(about);
});


///////////////////////////////
// Tell Express to  Listen
///////////////////////////////
app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`)
});