const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pickUpSchema = new Schema({
    establishment: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailPref: { type: Boolean, default: false },
    phonePref: { type: Boolean, default: false },
    address: { type: String, required: true },
    foodType: { type: String, required: true },
    weekDay: { type: String, required: true },
    time: { type: String, required: true },
    driverLicensedId: { type: String, default: "" },
    driverPhone: { type: String, default: "" },
    delivered: { type: Boolean, default: false },
    dropOffAddress: { type: String, default: "" },
});

const Pickup = mongoose.model('Pickup', pickUpSchema);

module.exports = Pickup;