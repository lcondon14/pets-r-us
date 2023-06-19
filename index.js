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
app._router.set('views', path.join(__dirname, 'views'));

// Sets the view engine to EJS
app.set('view engine', 'ejs');

// Defines routes
app.get('/', (req, res)=> {
    res.render('index');
});

app.get('/grooming', (req, res) => {
    res.render('grooming');
});

// Server
const PORT = process.env.PORT || 3000;






// Port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));