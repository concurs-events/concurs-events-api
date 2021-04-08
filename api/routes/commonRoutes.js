module.exports = function (app) {
    var contentFulController = require('../controllers/contentfulController')
    var userController = require('../controllers/userController')

    app.route('/get-data').post(contentFulController.getDataFromContentful)
    app.route('/save-response').post(userController.storeDataToDb)
}