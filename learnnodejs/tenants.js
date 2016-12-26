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

var port = process.env.PORT || 9300;        // set our port

var pool = require('./db');

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

    // create a user (accessed at POST http://service:9300/api/tenants)
    .post(function(req, res) {

        pool.connect(function(err, client, done) {
                const results = [];
                if(err) {
                        done();
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                }
                console.log("tenantName="+req.body.tenantname);
                console.log("tenantArea="+req.body.tenantarea);
                // SQL Query > Insert Data
                client.query('INSERT INTO tenants(tenantName, tenantArea) values($1, $2)',[req.body.tenantname, req.body.tenantarea], function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();
                        if(err) {
                                console.log(err);
                                return res.status(500).json({success: false, data: err});
                        }
                        return res.json({success: true, message: "Tenant Created"});
                });

        });

    })

    // get all the users (accessed at GET http://service:9300/api/tenants)
    .get(function(req, res) {

        pool.connect(function(err, client, done) {

                if(err) {
                        done();
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                }

                client.query('SELECT * FROM tenants ORDER BY tenantName ASC', function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();

                        if(err) {
                                console.log(err);
                                return res.status(500).json({success: false, data: err});
                        }

                        return res.json(result.rows);

                });

        });

     });


// on routes that end in /users/:userid
// ----------------------------------------------------
router.route('/users/:userid')

    // get the user information with this id (accessed at GET http://localhost:9100/api/users/:userid)
    .get(function(req, res) {

        pool.connect(function(err, client, done) {

                if(err) {
                        done();
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                }

                console.log("userid="+req.params.userid);

                client.query('SELECT * FROM users WHERE alogin=$1',[req.params.userid], function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();

                        if(err) {
                                console.log(err);
                                return res.status(500).json({success: false, data: err});
                        }

                        return res.json(result.rows);
                });

        });

    })

    // update the user with this id (accessed at PUT http://localhost:9100/api/users/:userid)
    .put(function(req, res) {

        pool.connect(function(err, client, done) {

                if(err) {
                        done();
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                }

                console.log("userid="+req.body.isadmin);
                console.log("userid="+req.params.userid);

                client.query('UPDATE users SET isadmin=$1 WHERE alogin=$2',[req.body.isadmin, req.params.userid], function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();

                        if(err) {
                                console.log(err);
                                return res.status(500).json({success: false, data: err});
                        }

                        return res.json({success: true, message: "User isadmin updated"});
                });

        });

     })

    // delete the user with this id (accessed at DELETE http://localhost:9100/api/users/:userid)
    .delete(function(req, res) {

        pool.connect(function(err, client, done) {

                if(err) {
                        done();
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                }

                console.log("userid="+req.params.userid);

                client.query('DELETE FROM users WHERE alogin=$1',[req.params.userid], function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();

                        if(err) {
                                console.log(err);
                                return res.status(500).json({success: false, data: err});
                        }

                        return res.json({success: true, message: "User Deleted"});
                });

        });

     });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
