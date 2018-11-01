// // date they are available

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const volunteerSchema = new Schema({
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     email: { type: String, required: true },
//     availableDate: { $dateToString: { format: "%Y-%m-%d", date: "$date"} },
// });

// const Volunteer = mongoose.model("Volunteer", volunteerSchema);

// module.exports = Volunteer;