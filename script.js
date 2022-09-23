// Assignment Code
var generateBtn = document.querySelector("#generate");


var PWlength = window.prompt("length of password (8 - 20)");
//   var PWincludelowercase = window.confirm("Include lower case characters ?");
//   var PWincludeuppercase = window.confirm("Include upper case characters ?");
//   var PWincludenumbers = window.confirm("Include numbers ?");
//   var PWincludespecialchars = window.confirm("Include special characters ?");

  var alphabet = "abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
  for(i = 0; i < PWlength ; i++ ) {
    console.log(alphabet[Math.floor(Math.random() * ( 25 - 0 ) + 0)])
  } 
  // if()
  // var PWlength = window.prompt("length of password (8 - 20)");
  // var PWincludelowercase = window.confirm("Include lower case characters ?");
  // var PWincludeuppercase = window.confirm("Include upper case characters ?");
  // var PWincludenumbers = window.confirm("Include numbers ?");
  // var PWincludespecialchars = window.confirm("Include special characters ?");
  // var index = Math.floor(Math.random() * PWlength.length)
  // alphabet[Math.floor(Math.random() * ( 25 - 0 ) + 0)]
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
