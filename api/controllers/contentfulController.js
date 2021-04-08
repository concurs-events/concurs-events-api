'use strict';


var mongoose = require('mongoose'),
    contact = mongoose.model('contact-us');

exports.getDataFromContentful = function (req, res) {
    contact.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};