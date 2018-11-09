const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailPref: { type: Boolean, default: false },
    phonePref: { type: Boolean, default: false },
    driverLicenseId: { type: String, required: true },
    vehicleMake: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    licensePlate: { type: String, required: true }
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;