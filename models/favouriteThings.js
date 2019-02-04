let mongoose = require('mongoose');

let favouriteThingsSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favouriteThings"
});

module.exports = mongoose.model('alimokheamer', favouriteThingsSchema);