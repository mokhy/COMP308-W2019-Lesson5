let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

/* Create a reference to the db schema */
let contact = require('../models/contact'); // reference to contact in models folder

/* GET Contact list page - READ Operation */
router.get('/', (req, res, next) =>{
    contact.find((err, contactList) =>{
        if (err) {
            return console.error(err);
        }
        else{
            // console.log(contactList);

            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
        }
    });
});

module.exports = router;