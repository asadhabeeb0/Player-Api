const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/players").then(() => {
    console.log("connection is successful");
}).catch((e) => {
    console.log("No connections");
});