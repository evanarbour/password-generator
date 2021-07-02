
// define the characters that can be used in the password
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()+=";


// connect HTML elements to the DOM
var passwordText = document.getElementById("password");
var length = document.getElementById("length");
var checkboxNumbersElement = document.getElementById("numbers");
var checkboxSymbolsElement = document.getElementById("symbols");
var checkboxUpperElement = document.getElementById("uppercase");
var checkboxLowerElement = document.getElementById("lowercase");
var generateBtn = document.getElementById("generate");

// When the "generate password" button is clicked, the "Write Password" function kicks off
generateBtn.addEventListener("click", writePassword);

// The "writePassword" function will create a string of characters with selections from user input.
function writePassword() {

  // setting the value to an open string, and then adding character sets to it based on user input.
  var characterString = '';

  // using ternary operators to evaluate if the boxes are checked (true) or unchecked (false), then adding the values to our string.
  checkboxNumbersElement.checked ? (characterString += numbers) : ''; 
  checkboxSymbolsElement.checked ? (characterString += symbols) : '';
  checkboxUpperElement.checked ? (characterString += alphaUpper) : '';
  checkboxLowerElement.checked ? (characterString += alphaLower) : '';
  passwordText.value = generatePassword(length.value, characterString);
}

// We then pass on that data to the "Generate Password" function that randomizes and creates the password.
function generatePassword(length, characterString) {
  var password = '';
  // create a "for loop" to select a random character from the characterString we created, then add it onto the password variable - for the length of the user input.
  for (let i = 0; i < length; i++) {
    password += characterString.charAt(
      Math.floor(Math.random() * characterString.length)
    );
  }
  return password;
}