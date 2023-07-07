/*
Title: index.js 
Author: Laurel Condon
Date: 15 June 2023
Description: Index.js page for Pets-r-us
*/



const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const CONN = 'mongodb+srv://lmcondon:Gpqzfv7Ilqzp9AGl@customers.psbtw5y.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

const Customer = require('./modules/customer');

// Sets the views directory
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/site", express.static(path.join(__dirname, "public/stylesheets")));

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

app.get('/register', (req, res) => {
    res.render('register');
});

// Server
const PORT = process.env.PORT || 3000;

app.post('/register', async (req, res) => {
    const { customerId, email } = req.body;
// Create new customer    
    try {
       await Customer.create({ customerId, email });
// Send success response
    res.redirect('/');
    } catch (error) {
// Handles errors
    res.status(500).json({ message: 'Registration failed', error: error.message });        
    }
});

app.get('/customers', (req, res) => {
    Customer.find()
    .then((customers) => {
        res.render('customer-list', { customers });
    })
    .catch((error) => {
        console.error('Error retrieving customer:', error);
        res.status(500).send('Internal Server Error');
    });
});

// Port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
