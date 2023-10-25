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

// GET route to notes page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
});
