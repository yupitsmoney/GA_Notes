/*
WELCOME TO TODAY'S JAVASCRIPT CODING CHALLENGE

BELOW ARE SOME PROBLEMS THAT WE WOULD LIKE YOU TO SOLVE

EACH PROBLEM COMES WITH A SIMPLE TEST TO ALERT YOU AS TO WHETHER OR NOT YOU HAVE BUILT THE CORRECT FUNCTIONALITY

GO AHEAD AND RUN IT IN YOUR CONSOLE USING NODE WITH THE FOLLOWING LINE...

"$ node javascript_basics_coding_challenge.js"

SEE ALL THOSE ERRORS?!

LET'S START MAKING SOME CODE THAT WILL REMOVE THOSE ERRORS

*/

// DO NOT EDIT/CHANGE THE TESTS (IF STATEMENTS) ! 

// LET'S GET STARTED!


/*EVENLY DIVIDEABLE?
Write a function named "evenlyDivide" that accepts 1 argument, an INTEGER. Return an array filled with numbers that evenly divide into the target number

EXAMPLE:

evenlyDivide(4)  #=> [1,2,4]
evenlyDivide(5)  #=> [1,5]
evenlyDivide(30) #=> [1,2,3,5,6,10,15,30]
*/

// AGAIN: DO NOT EDIT/CHANGE THE TESTS (IF STATEMENTS) ! 

// THIS IF STATEMENT TESTS OUR CODE:
if (evenlyDivide(4).toString() != [1,2,4].toString() && evenlyDivide(30).toString() != [1,2,3,5,6,10,15,30].toString()) {
	console.log("ERROR: Evenly Divide Function Incorrect!");
}

function evenlyDivide(){
	return ""
}


/*How many golf trophies do you own?

Inspired by our own resident club swinger, write the function "howManyGolfTrophiesDoYouOwn"" that accepts the name of a programmer, and returns the number of golf trophies owned by that person. The only person who owns trophies is Jim, by the way. He owns 18, which is an awesome number of trophies. Anyone else owns 0.

howManyGolfTrophiesDoYouOwn("anyone else") \\ should === 0
howManyGolfTrophiesDoYouOwn("Jim") \\ should === 18
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (howManyGolfTrophiesDoYouOwn("Jim") != 18) {
	console.log("ERROR: How Many Golf Trophies Function Incorrect!")
}

function howManyGolfTrophiesDoYouOwn(){}

/*
LAST
Write a function that accepts an ARRAY or a STRING as an input and returns the last item.

EXAMPLE:

last( [1,2,3,4] ) # => 4
last( "xyz" ) # => "z"
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (last([1,2,3,4]) != 4 && last("xyz") != "z") {
	console.log("ERROR: Last Function Incorrect!");
}

function last(){}


/*
PALINDROME

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

Write a function named "palindrome" that accepts one parameter, a STRING. If the word is a palindrome return true, if not return false.

EXAMPLE:

palindrome("Meredith")  #=> false
palindrome("Anna")   #=> true
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (palindrome("Meredith") != false && palindrome("Anna") != true) {
	console.log("ERROR: Palindrome Function Incorrect!");
}

function palindrome(){}

/*
PLAYING WITH TYPES
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

EXAMPLE:

typing(2);    //returns number=2
typing(true); //returns boolean=true
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (typing(2) != "number=2" && typing(true) != "boolean=true") {
	console.log("ERROR: Typing Function Incorrect!");
}

function typing(){}

/*
SHORT LONG SHORT

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).


EXAMPLE:

    solution("1", "22") // returns "1221"
    solution("22", "1") // returns "1221"
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (solution("1", "22") != "1221" && solution("22", "1") != "1221") {
	console.log("ERROR: Solution Function Incorrect!");
}

function solution(){}

/*
Max of Three!

Write a function named "maxOfThree" that takes three numbers as arguments and returns the largest of them.

maxOfThree(3, 5, 9) //=> 9
maxOfThree(3, 9, 5) //=> 9
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (maxOfThree(3, 5, 9) != 9 && maxOfThree(3, 9, 5) != 9) {
	console.log("ERROR: Max of Three Fucntion Incorrect!");
}

function maxOfThree(){}

/*
Square root?

Write a function named "squareRoot" that checks if the parameter passed in is a square root.

squareRoot(4096) //=> true
squareRoot(333)  //=> false
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (squareRoot(4096) != true && squareRoot(333) != false) {
	console.log("ERROR: Square Root Function Incorrect!");
}

function squareRoot(){}

// BONUS ROUND

/*
REVERSE STRING
Create a function named "reverse" for the String prototype that will allow the following functionality:

EXAMPLE:

"String".reverse();         //=> returns "gnirtS"
"I like hippos".reverse(); //=> "soppih ekil I"

HINT: To add functions to the the STRING prototype use the following syntax:

String.prototype.myCoolFunction = function(){
  console.log("My mom says I'm the smartest person ever");
  }

"You're a jerk".myCoolFunction() #=> "My mom says I'm the smartest person ever"

UNCOMMENT OUT THE BELOW IF STATEMENT WHEN YOU THINK YOU'VE GOT IT WORKING!
*/

// THIS IF STATEMENT TESTS OUR CODE:
// if ("String".reverse() != "gnirtS" && "I like hippos".reverse() != "soppih ekil I") {
// 	console.log("ERROR: String Reverse Function Incorrect!");
// }

/*COLOR GHOST

Create a JavaScript object named Ghost that includes a function named "color". When I call this function it should return a random color

EXAMPLE:

ghost.color() //=> "white" or "yellow" or "purple" or "red"

UNCOMMENT OUT THE BELOW IF STATEMENT WHEN YOU THINK YOU'VE GOT IT WORKING!
*/

// THIS IF STATEMENT TESTS OUR CODE:
// if (ghost.color() != "white" || ghost.color() != "yellow" || ghost.color() != "purple" || ghost.color() != "red") {
// 	console.log("ERROR: Ghost Color Function Incorrect!");
// }




// ADDITIONAL PROBLEMS FOR THE JAVASCRIPT/MATH ENTHUSIASTS!!! (NO TESTS HERE, YOU ARE ON YOUR OWN IN THE DANGER ZONE!)

/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


