// Assignment Code/ DOM elements
var generateBtn = document.querySelector("#generate");



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
  

  if (lengthQ === "") {
  alert("please enter a numerical value");
} else {
  passwordText.value = password;
}


// Copy to clipboard 
// copyBtn.setAttribute();
// copyBtn.focus();

}

//Generate random characters
  var randomFunc = [
  {lower: getRandomLower()},
  {upper: getRandomUpper()},
  {number: getRandomNumber()},
  {symbol: getRandomSymbol()
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
