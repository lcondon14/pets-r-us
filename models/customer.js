


const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema ({
    customerId: { type: String, unique: true, required: true },
    email: {type: String, unique: true, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

