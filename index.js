/* Without node module
var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};*/

//With Node module
var rect = require("./rectangle");

function solveRect(l, b) {
	console.log("Area = " + rect.area(l,b));
	console.log("Perimeter = " + rect.perimeter(l,b));

}

solveRect(2,3);
