/** dbsql.js **/

var pool = require('./db.js');

var Dbsql = function () {};

// With Result Set and With Search Data
Dbsql.prototype.execsqlwrswd = function (sql, data, callback) {  

    pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.log(err);
                callback(err, JSON.stringify({success: false, data: err}));
            }
            console.log("with rs sql=="+sql);
            client.query(sql, data, function(err, result) {
                //call `done()` to release the client back to the pool
                done();
                if(err) {
                    console.log(err);
                    callback(err, JSON.stringify({success: false, data: err}));
                }
                callback(null, JSON.stringify(result.rows));
            });
    });   
}

// With Result Set and With Out Search Data
Dbsql.prototype.execsqlwrswod = function (sql, callback) {  

    pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.log(err);
                callback(err, JSON.stringify({success: false, data: err}));
            }
            console.log("with rs sql=="+sql);
            client.query(sql, null, function(err, result) {
                //call `done()` to release the client back to the pool
                done();
                if(err) {
                    console.log(err);
                    callback(err, JSON.stringify({success: false, data: err}));
                }
                callback(null, JSON.stringify(result.rows));
            });
    });   
}

// Without Result Set and With Search Data
Dbsql.prototype.execsqlworswd = function (sql, data, callback) {  

    pool.connect(function(err, client, done) {
            if(err) {
                done();
                console.log(err);
                callback(err, JSON.stringify({success: false, data: err}));
            }
            console.log("without rs sql="+sql);
            client.query(sql, data, function(err, result) {
                //call `done()` to release the client back to the pool
                done();
                if(err) {
                    console.log(err);
                    callback(err, JSON.stringify({success: false, data: err}));
                }
                callback(null, JSON.stringify({success: true, data: "ok"}));
            });
    });   
}

module.exports = Dbsql;