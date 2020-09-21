//PART 1

2 == "2";
//this returns TRUE, since it evaluates agreement in value

2 === 2;
// this returns TRUE since it evaluates agreement in type and value

10 % 3;
// this returns 1, it us a remainder operator

10 % 3 === 1;
// this returns TRUE as 1 the remainder is the same as 1

true && false
//returns false

false || true
//returns TRUE

true || false;
//returns TRUE


// PART 2
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
/*
QUestion 2
it will display "Keep it up" in the Console
*/

/*
we can't actually say "if(isLearning === true)" because it has already been assigned]
 */

let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
/*1. this gives us "third" because it has a value unlike secondvariable*/
/* 2. firstvariable value is 'undefined' */
/** 3. Is the value of firstvariable a "truthy" value? Why?
 * it is a falsy value because it is not true when compared to others
 * 4. Is the value of secondvariable a "truthy" value? Why?
 * no, it is a falsy since the answer is not that
 * 5. Is the value of thirdvariable a "truthy" value? Why?
 * yes, it is a truthy value since it is the answer
 */


