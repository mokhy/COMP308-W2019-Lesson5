let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let favouriteThings = require('../models/favouriteThings');

router.get('/', (req, res, next) => {
    favouriteThings.find((err, favouritesList) => {
        if(err){
            return console.error(err);
        }
        else{
            // console.log(favouritesList);
        }

        res.render('contacts/index', {
            title: 'My Favourite Things',
            favouritesList: favouritesList
        });
    });
});

module.exports = router;