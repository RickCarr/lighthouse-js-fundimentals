/* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */

var snd="";
function laugh(num) {
    for (var x = 0; x <(num); x++){
    snd = snd + "bah";
    }
    snd = snd + "!";
    return snd;
}
console.log(laugh(3));

var laugh = function(num) {
    var sound = "";
    for (var x = 0; x < num; x++) {
        sound += "ha";
        
    } 
    return sound +"!";
} 
console.log(laugh(10));

/*
 * Programming Quiz: Inline Functions (5-6)
 
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
*/
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
  } 
emotions("happy", function(num) {
var sound = "";
    for (var x = 0; x < num; x++) {
        sound += "ha";
        
    } 
    return sound +"!";

});
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression