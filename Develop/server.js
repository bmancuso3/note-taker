// import necessary variables
const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// initialize instance of express
const app = express();

// specify port
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET route for home
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET api for notes db
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            data = JSON.parse(data);
            res.json(data);
        }
    })
  });

// POST api for new note
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body; 
    if (req.body) {
        const newNote = {
            id: uuidv4(),
            title,
            text
        };
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            data = JSON.parse(data);  
            data.push(newNote); 
            fs.writeFile('./db/db.json', JSON.stringify(data), (err) => {
                if (err) {
                    res.json(err)
                }
                else {
                    res.send('Note successfully added.');
                }
            })    
        }
    
    })

    };
});

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
});
