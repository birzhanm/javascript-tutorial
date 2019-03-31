/*
Question 1:
What makes Javascript ubiquitous?
Javascript is a popular programming language capable of running in the browser. Javascript has a rich
exosystem consisting of both backend and frontent frameroks/libraries and modules. One of the prominent
backend environments of Javascript is NodeJS, while ReactJS is a popular frontend library based on Javascript

/*Question 2: What are the basics of Javascript?
Where does Javascript run?
Initially JavaScript could only runs on Javascript Engines, such as SpiderMonkey and V8, inside browser. However,
it is now possible to run Javascript code on Node, which is a C++ code which can run V8 engine.
Let us now delve into the basics of Javascript
*/
console.log('Hello!')

// Varaibles. Both 'var' and 'let' denote variables
let name="Anna";
var age=30;
let isApproved=true;
var choice=null;

// Types of variables
console.log(typeof name)
console.log(typeof age)
// Sometimes we can convert between types
ageAsString = String(age)
asAsInteger = ParseInt(ageAsString)


// Constants
const interestRate = 0.3;

// Objects
let person = {
  name: 'Peter',
  age: 35
};
// Let's change person's name to Mike
person.name = 'Mike';
// One could also use the bracket notation
person['name'] = 'Alice';

//Arrays
// New array of 100 elements
newArray = new Array(100);
let selectedItems = ['bread', 'milk']
firstItem = selectedItem[0];
// arrays can be modified
selectedItems[0] = 'water';
// one could push and pop the last element
selectedItems.push('cheese');
selectedItems.pop();

// Functions
function greet() {
  console.log("Hello World!")
}
greet();

function greet(name) {
  console.log("Hello " + name)
}
greet('Erika');

function sum(num1, num2) {
  return num1 + num2
}
// functions could be written in arrow notation. The following is an example of concise notation
var func = x => x*x;
// The following is an example of block notation
var func(x,y) => { return x+y; };

// let us learn how to apply functions on elements of some array
let array1 = [1, 2, 3, 4];
const squares = array1.map(x => x*x);
let array2 = [1, 4, 9, 16];
let roots = array2.map(function(num){
  return Math.sqrt(num)
});

// Conditionals
console.log(2 < 3); // true
console.log('5' == 5); // true ('==' performs type conversions)
console.log('5' === 5); // false ('===' does not perform type conversions)

// Logical operators
bool1 = true;
bool2 = false;
conjunction = bool1 && bool2;
disjunction = bool1 || bool2;
negation = !bool1;

// if statement
time = 10;
if time > 5
  console.log('waiting time is more than 5 minutes');

if time <= 5
  console.log('waiting time is less than 5 minutes');
else {
  console.log('waiting time is more than 5 minutes');
}

if time <= 5
  console.log('waiting time is less than 5 minutes');
else if time <= 10
  console.log('waiting time is less than 10 minutes');
else {
  console.log('waiting time is more than 10 minutes');
}

// for loop
var names = ['Adam', 'Kate', 'Tom'];
for (var i=0; i < names.length; i++){
  console.log("Hello " + names[i]);
}
// let's travers person object defined earlier
for (var key in person){
  console.log(key + ": " + obj[key]);
}

// while loop
var i = 20;
var counter = 0;
while (i>1) {
  i /= 2;
  counter++;
}
console.log('counter: ' + counter)
