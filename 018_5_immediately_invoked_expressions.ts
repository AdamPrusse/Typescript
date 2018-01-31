
//function expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
	return first + " " + last;
}

console.log(fullName('Adam', 'Prusse'));

// Immediately Invoked Version
(function(first : string, last : string) {
	console.log(first + " " + last);
})('Paulo', 'Gibberto');