const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    age : Number,
    favouriteFoods : [{
        type: String
    }]
},{timestamps: true})

const Person = mongoose.model('Person', personSchema)

module.exports = Person