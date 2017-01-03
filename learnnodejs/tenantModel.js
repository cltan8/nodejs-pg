/** tenantModel.js **/

var Dbsql = require('./dbsql.js');
var dbsql = new Dbsql();

var Tenant = function () {};

Tenant.prototype.d = function (req, callback) {  
    var sql = "DELETE FROM users WHERE sid = $1";
    var data = [];
    data.push(req.body.userid);
    dbsql.execsqlworswd(sql, data, function(err, result) {
        if (err) {
            callback(err, result);
        }
        callback(null, result); 
    });
}

Tenant.prototype.g = function (req, callback) {  
    var sql = "SELECT * FROM users";    
    dbsql.execsqlwrswod(sql, function(err, result) {
        if (err) {
            callback(err, result);
        }
        callback(null, result);    
    });
}

/*Tenant.prototype.s = function (callback) {  
}*/

/*Tenant.prototype.u = function (callback) {  
}*/

module.exports = Tenant;

//https://github.com/timjrobinson/nodejsmodels
//http://timjrobinson.com/how-to-structure-your-nodejs-models-2/