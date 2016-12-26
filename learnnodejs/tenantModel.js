/** tenantModel.js **/

var pool = require('./db');

var Tenant = function (data) {  
    this.data = data;
}

Tenant.prototype.data = {}

Tenant.prototype.changeName = function (name) {  
    this.data.name = name;
}

# Static
Tenant.findById = function (id, callback) {  
    db.get('users', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new User(data));
    });
}

Tenant.prototype.d = function (callback) {  
    var self = this;

	pool.connect(function(err, client, done) {

                if(err) {
                        done();
                        console.log(err);
                        return res.status(500).json({success: false, data: err});
                }

                console.log("sid="+data.tenantId);

                client.query('DELETE FROM tenants WHERE sid=$1',[data.tenantId], function(err, result) {
                        //call `done()` to release the client back to the pool
                        done();

                        if(err) {
                                console.log(err);
                                return res.status(500).json({success: false, data: err});
                        }

                        return res.json({success: true, message: "User Deleted"});
                });

        });
}

Tenant.prototype.g = function (callback) {  
    var self = this;
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, self); 
    });
}

Tenant.prototype.s = function (callback) {  
    var self = this;
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, self); 
    });
}

Tenant.prototype.u = function (callback) {  
    var self = this;
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, self); 
    });
}

Tenant.prototype.get = function (name) {  
    return this.data[name];
}

Tenant.prototype.set = function (name, value) {  
    this.data[name] = value;
}

module.exports = Tenant;

//https://github.com/timjrobinson/nodejsmodels
//http://timjrobinson.com/how-to-structure-your-nodejs-models-2/