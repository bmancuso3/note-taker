// ! NEW HEROKU APP, CONNECT TO GITHUB, DEPOLOYMENT ON END OF CLASS RECORDING 26 OCT
// import necessary variables
const express = require('express');
const path = require('path');
const db = require('./db/db.json');

// initialize instance of express
const app = express();

// specify port
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route for home
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// GET api for db

// POST api for new note


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
});
