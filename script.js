// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Create Character set

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Empty array
 
var resultArray = [];
var userArray = [];

//-----------------------------------------------------------------
  var input = prompt ("How many characters would you like in your password? Enter a number between 8 and 128.");

  // Cancel pressed: stop without changing anything
  if (input === null) {
    return null;
  }

  var numCharacter = Number(input.trim());

  // Must be a whole number from 8 to 128
  if (!Number.isInteger(numCharacter) || numCharacter < 8 || numCharacter > 128) {
    alert ("Please enter a whole number between 8 and 128.");
    return null;
  }

  var numbers = confirm ("you want numbers in your password?");
  var uppercases = confirm ("you want Uppercases in your password?");
  var lowercases = confirm ("you want lowercases in your password?");
  var characters = confirm ("you want special characters in your password?");


// Conditionals 

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}

// At least one character type is required
if (resultArray.length === 0) {
  alert ("Please choose at least one character type.");
  return null;
}


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Nothing generated (cancelled or invalid input): keep the current value
  if (password === null) {
    return;
  }

  passwordText.value = password;

  
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
