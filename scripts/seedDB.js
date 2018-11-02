const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pickups"
);

const pickupSeed = [
  {
    establishment: "This is the establishment",
    email: "email@email.com",
    phoneNumber: "9876543210",
    emailPref: false,
    phonePref: true,
    address: "This is the address",
    foodType: "Prepared Foods",
    weekDay: "Monday",
    time: new Date(Date.now()),
    driverLicensedId: '',
    driverPhone: '',
    delivered: false
  }
];

db.Pickup
  .remove({})
  .then(() => db.Pickup.collection.insertMany(pickupSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
