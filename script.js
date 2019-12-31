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


 // Shuffles array in place.
 // @param {Array} a items An array containing the items.
 // Borrowed code from https://stackoverflow.com/questions/6274339
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  
//Copy password to clipboard



// Write password to the #password input
function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var lengthQ = prompt("Please enter a number between 1 - 12 for length of password.");
    //var randomArray = randomFunc[Math.floor(Math.random()*randomFunc.length)];
    

    
    if (lengthQ === "1") {
      passwordText.innerHTML = "";
      passwordText.textContent = randomFunc[Math.floor(Math.random()*randomFunc.length)];


      generatePassword();

    } else if (lengthQ ==="2") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,2).join('');


      generatePassword();

    } else if (lengthQ ==="3") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,3).join('');


      generatePassword();

    } else if (lengthQ ==="4") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,4).join('');


      generatePassword();

    } else if (lengthQ ==="5") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,5).join('');


      generatePassword();

    } else if (lengthQ ==="6") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,6).join('');


      generatePassword();

    } else if (lengthQ ==="7") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,7).join('');


      generatePassword();

    } else if (lengthQ ==="8") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,8).join('');


      generatePassword();

    } else if (lengthQ ==="9") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,9).join('');


      generatePassword();

    }else if (lengthQ ==="10") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,10).join('');


      generatePassword();

    } else if (lengthQ ==="11") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.slice(0,11).join('');


      generatePassword();

    } else if (lengthQ ==="12") {
      passwordText.innerHTML = "";
      shuffle(randomFunc);
      passwordText.textContent = randomFunc.join('');


      generatePassword();

    } else {
      alert("please enter a number between 1 - 12");
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

  // BONUS
function copyToClipboard() {

  var copyText = document.querySelector("#password");
  
  copyText.select();

  document.execCommand("copy");

  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

copyClipBtn.addEventListener("click", copyToClipboard);
