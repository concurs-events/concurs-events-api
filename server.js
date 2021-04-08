var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    model = require('./api/models/commonModel');
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://client-portal-api:August2K18@ce.uojaw.mongodb.net/concurs-events-api?retryWrites=true&w=majority');

var routes = require('./api/routes/commonRoutes'); //importing route

routes(app);

app.listen(port);

console.log('Concurs Events RESTful API server started on: ' + port);