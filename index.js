/*
Title: index.js 
Author: Laurel Condon
Date: 15 June 2023
Description: Index.js page for Pets-r-us
*/





const express = require('express');
const app = express();
const path = require('path');

// Sets the views directory
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Sets the view engine to EJS
app.set('view engine', 'ejs');

// Defines routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/grooming', (req, res) => {
    res.render('grooming');
});

app.get('/boarding', (req, res) => {
    res.render('boarding');
});

app.get('/training', (req, res) => {
    res.render('training');
});
// Server
const PORT = process.env.PORT || 3000;






// Port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));