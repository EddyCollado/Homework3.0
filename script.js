// Assignment Code/ DOM elements
var generateBtn = document.querySelector("#generate");
var lengthPass = 4;

// Attempting to build a for loop that will generate through the functions
//of the randomFunc object to generate a password
function generatePassword() {
  for (var i = 0; i < randomFunc.length; i++ ) {

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthQ = prompt("Please indicate the length of desired password");
  lengthQ.lengthPass = true;

if (lengthQ == true) {
  alert("please enter only a numerical value");
} else {
  
  generatePassword();
}


}

//Generate random characters
  var randomFunc = [{
  lower: getRandomLower(),
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol()
}];



// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomFunc);



function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// BONUS EVENT LISTENER
