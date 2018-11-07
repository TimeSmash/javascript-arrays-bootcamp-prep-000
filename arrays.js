var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
// List of variables/ingredients for grilled cheese.
// Want to make tomato sauce instead, which needs garlic 
// and tomato, but don't have recipe. May end up with
//something like bread in sauce instead.
//Use arrays to group like items

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var myArray = ["foo", "bar", "Tomato"];
function addElementToBeginningOfArray(array, element){
return [element , ...array];
}
addElementToBeginningOfArray(myArray, "Cucumber");

var gameSystems = ["3DS", "Switch", "PC", "PS4"];

function destructivelyAddElementToBeginningOfArray(array, element){
  var destAddGame = array.unshift(element);
return array;
}
destructivelyAddElementToBeginningOfArray(gameSystems, "Virtual Boy");

var numbers = [1, 2, 3];
function addElementToEndOfArray (array, element) {
  var numbersArray = [...array, element];
return numbersArray;
}
addElementToEndOfArray(numbers, 4);

var letters = ["A", "B", "C"];

function destructivelyAddElementToEndOfArray (array, element) {
  var lettersDestAdd = array.push(element);
  return lettersDestAdd;
}
  
  destructivelyaddElementToEndOfArray(letters, "D");