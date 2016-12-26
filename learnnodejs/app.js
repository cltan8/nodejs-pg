// app.js

//PATTERN 1: DEFINE A GLOBAL
//require('./foo.js');

//PATTERN 2: EXPORT AN ANONYMOUS FUNCTION
//var foo = require('./foo.js');
//foo();

//PATTERN 3: EXPORT A NAMED FUNCTION
//var foo = require('./foo.js').foo;
//foo();

//PATTERN 4: EXPORT AN ANONYMOUS OBJECT
//var foo = require('./foo.js');
//foo.log()

//PATTERN 5: EXPORT A NAMED OBJECT
//var foo = require('./foo.js').foo;
//foo.log();

//PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE
//var foo = require('./foo.js');
//var fooO = new foo();
//fooO.log();

//PATTERN 7: EXPORT A NAMED PROTOTYPE
var foo = require('./foo.js').foo;
var fooO = new foo();
fooO.log();

//PROS AND CONS
//Named exports - one module, many exported things
//Anonymous exports - simpler client interface

//module.exports 
//VS 
//exports