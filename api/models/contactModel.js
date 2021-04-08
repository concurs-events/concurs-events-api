
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var contactSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  attending: {
    type: String
  },
  message: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact-us', contactSchema);