'use strict';

var mongoose = require('mongoose'),
    contact = mongoose.model('contact-us');

exports.storeDataToDb = function (req, res) {
    var new_user = new contact(req.body);
    new_user.save(function (err, result) {
        if (err) {
            res.json(err)
        }
        res.json(result)
    });
};