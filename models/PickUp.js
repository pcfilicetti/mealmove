const mongoose = require("mongoose");
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
    time: { $dateToString: { format: "%mm-%dd-%yyyy", date: "$date"} },
    driverLicensedId: { type: String, default: "" },
    driverPhone: { type: String, default: "" },
    delivered: { type: Boolean, default: false }
});

const PickUp = mongoose.model("pickUp", pickUpSchema);

module.exports = PickUp;