// app/models/user.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var testSchema = mongoose.Schema({
    
    title: String

});


// create the model for users and expose it to our app
var test = mongoose.model('Test', testSchema);

module.exports = test;