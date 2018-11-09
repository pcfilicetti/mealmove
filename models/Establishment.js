const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const establishmentSchema = new Schema({
    establishment: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailPref: { type: Boolean, default: false },
    phonePref: { type: Boolean, default: false },
    address: { type: String, required: true },
    foodType: { type: String, required: true }
});

const Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;