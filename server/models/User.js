const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailPref: { type: Boolean, default: false },
    phonePref: { type: Boolean, default: false },
    vehicleMake: { type: String },
    vehicleModel: { type: String },
    licensePlate: { type: String },
    establishment: { type: String },
    address: { type: String },
    foodType: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;