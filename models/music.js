// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const musicSchema = new Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },   
    quantity: { type: Number}
}
)

// create a Model from our Schema
const Music = mongoose.model('Music', musicSchema)

// export our Model
module.exports = Music;