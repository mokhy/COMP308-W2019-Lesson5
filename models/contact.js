let mongoose = require('mongoose');

/* Create a model class */
// a custom schema class and it stores the reference here
// the object within the schema is like a parameterized 
// configuration for this schema
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    // specifys which collection this schema refers to
    collection: "first"
});

module.exports = mongoose.model('test', contactSchema);