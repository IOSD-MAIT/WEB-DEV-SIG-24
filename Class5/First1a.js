// Mocha ---> LiveScript ---> JavaScript 
// ES 6 ---> Babel ---> JavaScript

var a = false;

// number --> string --> boolean ---> NULL ---> undefined --> primitives 
// object --> non primitive

console.log(a)
console.log(typeof a); // typeof operator


var a = true; // redclare and redefine possible

let a = 10; // redeclare not possible, redefine possible
 a = 40;

const a = 10; // redeclare and redefine not possible

var ans = 10; // declaration
var ans ;
ans =10;  // definition


// null and undefined 

var address;
console.log(address); // undefined

var address = null;  // null

// number --> integer, float, double, NaN, Infinity

Math.sqrt(-1) // NaN not a number

var a = 1/0 // Infinity



// Operators --> Arithetic, Assignment, Logical  , Bitwise 
  a += 10; // a = a + 10  --> Asignment 

//   && || ! // Logical  

// >> << & | ^ ~ // Bitwise
 3 & 5


 // Typecasting --> Implicit and Explicit
int a = 5;
float b = a; // Implicit
double c = (double) a; // Explicit


// ==     ====

1 == '1'// true   value check
1 === '1' // false  value + datatype check


// Conditionals --> if else, switch case, ternary operator ? : 

if(a>10) {
    console.log('a is greater than 10')
}
else { console.log('a is less than 10')}

// ternary operator
a>10 ? console.log('a is greater than 10') : console.log('a is less than 10')

// console.log(a)  // line comment
/*  paragraph */  // block comment

// Loops --> for, while, do while, for in, for of
