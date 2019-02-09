let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

/* Create a reference to the db schema */
let contactModel = require('../models/contact'); // reference to contact in models folder

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

/* GET Route for the Add page
  this will display the add Page
*/
 
router.get('/add', (req, res, next) => {
    res.render('contacts/add'), {
    title: 'Contact List'
    }
});

/* Post route for processing the Add page  */
router.post('/add', (req, res, next) => {

    console.log(req.body);

    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    contactModel.create(newContact, (err, contactModel) => {
        if (err) {  // this error gives a server error because it cannot add the content
            console.log(err);
            res.end(err);
        } else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;