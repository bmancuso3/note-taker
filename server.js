// import necessary variables
const express = require('express');
const path = require('path');
const db = require('./Develop/db/db.json');

// initialize instance of express
const app = express();

// specify port
const PORT = process.env.PORT || 3001;