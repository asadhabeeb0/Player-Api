const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    ranking: {
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    }
})

const PlayersRanking = new mongoose.model("PlayerRanking", playerSchema);

module.exports = PlayersRanking;