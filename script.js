// Assignment Code/ DOM elements
var generateBtn = document.querySelector("#generate");
//Trying to see what a preset length would do
var lengthE1 = 12;



// Attempting to build a for loop that will generate through the functions
//of the randomFunc object to generate a password

// Generator functions - http://www.net-comber.com/charset.html  
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

  var randomFunc = [
    {lower: getRandomLower()},
    {upper: getRandomUpper()},
    {number: getRandomNumber()},
    {symbol: getRandomSymbol()
  },{lower: getRandomLower()},
  {upper: getRandomUpper()},
  {number: getRandomNumber()},
  {symbol: getRandomSymbol()
},{lower: getRandomLower()},
{upper: getRandomUpper()},
{number: getRandomNumber()},
{symbol: getRandomSymbol()
}];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthQ = prompt("Please indicate the length of desired password");
  

  if (lengthQ === "12") {
    passwordText.textContent = password;
    passwordText.innerHTML = randomFunc;
    

    generatePassword();
    
    
  } else {
    alert("please enter 12");
  
  }

  function generatePassword() {
    for (var i = 0; i < randomFunc.length; i++ ) {
      
      console.log(randomFunc[i]);
    }
  }


  



// Copy to clipboard 
// copyBtn.setAttribute();
// copyBtn.focus();



}

//Generate random characters
  


// Generator functions - http://www.net-comber.com/charset.html






function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// BONUS EVENT LISTENER
