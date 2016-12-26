var x = function (a, b) {return a * b};
var z = x(4, 3);
console.log(z);

(function () {
    var x = "Hello!!";      // I will invoke myself
	console.log(x);
})()