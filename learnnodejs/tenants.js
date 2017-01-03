// tenants.js

// JARMS Service: Providing RESTFUL service for Tenant Maintainance
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var tenantModel = require('./tenantModel.js');
var tm = new tenantModel();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9400;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('User Maintainance is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://service:9300/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our tenant maintainance api!' });
});

// more routes for our API will happen here

// on routes that end in /tenants
// ----------------------------------------------------
router.route('/tenants')

    // create a user (accessed at POST http://service:9400/api/tenants)
//    .post(function(req, res) {
//
//
//    })

    // get all the users (accessed at GET http://service:9400/api/tenants)
    .get(function(req, res) {
		
        tm.g(req, function(err, result) {
            if (err) {
                return res.status(500).json({success: false, data: err});
            }
            return res.status(200).json({success: true, data: result});
        });

     });


// on routes that end in /tenants/:tenantid
// ----------------------------------------------------
//router.route('/tenants/:tenantid')
//
//    // get the user information with this id (accessed at GET http://service:9400/api/tenants/:tenantid)
//    .get(function(req, res) {
//
//    })
//
//    // update the user with this id (accessed at PUT http://service:9400/api/tenants/:tenantid)
//    .put(function(req, res) {
//
//
//     })
//
//    // delete the user with this id (accessed at DELETE http://service:9400/api/tenants/:tenantid)
//    .delete(function(req, res) {
//
//
//     });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);