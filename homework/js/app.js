
//Section 1 - Terms
//1. The difference between concatenation and interpolation is in combining two or more variables together into an expression.
//	Concatenation can only be used with data type string, while interpolation (${ES6+}) can combine strings with integer data types.

var firstName = "David";
var lastName = "Epps";
console.log ("Hi, my name is " + firstName + " " + lastName);

var expField = "Computer Science";
var expSelf = 15;
var expWork = 10;
console.log ("Between self-study and work, I have " + (expSelf+expWork) +" years experience in the use of computers. (Experimental/ES6+? = ${..+..})");

//2. The acronym in DRY code stands for 'Don't Repeat Yourself', while conversely, the term WET code stands for
//	'Write Everything Twice'. This refers to the awreness of clean code and reserving system resources whenever
//	possible. This can be accomplished using objects and functions to carry out repetetive commands.

//Section 2 - Boolean Expressions

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 == '48');

//Section 2 - While Loops
//
//Infinite Loop I creates an infinite loop because there is no condition which would render init TRUE to FALSE
//Infinite Loop II is NOT an infinite loop because the expected output is a TypeError due to the constant declaration

//in Reading Code, the expected result was a string of 21 A's. var letters was initially declared as "A", and the loop (i)
// appended "A" thru the course of the loop

//The difference between a FOR loop and a WHILE loop is the syntax. A WHILE loop is only based on a set condition, and
// is best used when the number of times to loop is unknown. A FOR loop is set up with an initialization, a condition,
// and an increment or decrement.

for (let i=0; i<=999; i++) {
	console.log(i);
}

//and back again

for (let i=999; i>=0; i--) {
	console.log (i);
}




