const mongoose = require('mongoose');

//we declare our db structure here from that movie text file

const movieDB = new mongoose.Schema({
    name: String, 
    img: String, 
    summary: String
}, {
    timestamps: true
});

module.exports = mongoose.model('movieDB', movieDB);