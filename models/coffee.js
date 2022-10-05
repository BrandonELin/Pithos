// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const coffeeSchema = new Schema({
    type: { type: String, required: true }, 
    roast: { type: String},
    wholeBean: {type: Boolean}, 
    description: {type: String}, 
    quantity: { type: Number}
}
)

// create a Model from our Schema
const Coffee = mongoose.model('Coffee', coffeeSchema)

// export our Model
module.exports = Coffee;