// Assignment Code/ DOM elements
var generateBtn = document.querySelector("#generate");
var copyClipBtn = document.querySelector("#cobyBtn");

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

// The 12 characters it needs to loop around into 1 variable
  var randomFunc = [
    getRandomLower(),
    getRandomUpper(),
    getRandomNumber(),
    getRandomSymbol(),
    getRandomUpper(),
    getRandomLower(),
    getRandomSymbol(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomLower(),
    getRandomUpper(),
    getRandomSymbol()
  ];
//Copy password to clipboard



// Write password to the #password input
function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var lengthQ = prompt("Please enter 12 for length of password (more lengths soon)");
    

    
    if (lengthQ === "12") {
      passwordText.innerHTML = "";
      passwordText.textContent = randomFunc.join('');


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

function copyToClipboard() {
  // BONUS
  var copyText = document.querySelector("#password");
  
  copyText.select();

  document.execCommand("copy");

  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

copyClipBtn.addEventListener("click", copyToClipboard);
