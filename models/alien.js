const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    class: Number,
    section: String,
    rollno: Number,
    active: Boolean

})

module.exports= mongoose.model('Alien',alienSchema)