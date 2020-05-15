const mongoose = require('mongoose');

//we declare our db structure here from that movie text file

const movieDB = new mongoose.Schema({
    name: {type:String,text:true}, 
    img: {type:String,text:true}, 
    summary: String
}, {
    timestamps: true
});

module.exports = mongoose.model('movieDB', movieDB);