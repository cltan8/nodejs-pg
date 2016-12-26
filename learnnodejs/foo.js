// foo.js

//PATTERN 1: DEFINE A GLOBAL
//foo = function () {
  //console.log('PATTERN 1: DEFINE A GLOBAL');
//}

//PATTERN 2: EXPORT AN ANONYMOUS FUNCTION
//module.exports = function () {
  //    console.log('PATTERN 2: EXPORT AN ANONYMOUS FUNCTION');
    //}
	
//PATTERN 3: EXPORT A NAMED FUNCTION
//exports.foo = function () {
  //    console.log('PATTERN 3: EXPORT A NAMED FUNCTION');
    //}

//PATTERN 4: EXPORT AN ANONYMOUS OBJECT	
//var foo = function () {};
//foo.prototype.log = function () {
	//console.log('PATTERN 4: EXPORT AN ANONYMOUS OBJECT');
//};
//module.exports = new foo();

//PATTERN 5: EXPORT A NAMED OBJECT
//var foo = function () {};
//foo.prototype.log = function () {
	//console.log('PATTERN 5: EXPORT A NAMED OBJECT');
//};
//exports.foo = new foo();

//PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE
//var foo = function () {};
//foo.prototype.log = function () {
	//console.log('PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE');
//}
//module.exports = foo;

//PATTERN 7: EXPORT A NAMED PROTOTYPE
var foo = function () {};
foo.prototype.log = function () {
	console.log('PATTERN 7: EXPORT A NAMED PROTOTYPE');
};
exports.foo = foo;