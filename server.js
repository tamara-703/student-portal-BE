//requires
require('dotenv').config();

const express = require('express');
const app = express();



//middleware
app.use(express.urlencoded({extended: false}));

//routes
