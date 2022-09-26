// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ",' " ', "\\" ];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userchoices = []
var setchar ;
var result = " " ;



function generatePassword() {
  var PWlength = parseInt(window.prompt("length of password (8 - 128)"));
  if (!PWlength) {
    window.alert("You need to input a password length.");
    window.location.reload()
    return;
  } else if (PWlength > 128) {
    window.alert("Password is too big, try again.");
    window.location.reload()
    return;
  } else if (PWlength < 8) {
    window.alert("Password is too small, try again.");
    window.location.reload()
    return;
  }

  userchoices = [];
  var PWincludelowercase = window.confirm("Include lower case characters ?");
  if(PWincludelowercase === true){
    userchoices = userchoices.concat(lowerCase)
  }
  var PWincludeuppercase = window.confirm("Include upper case characters ?");
  if(PWincludeuppercase === true){
    userchoices = userchoices.concat(upperCase)
  }
  var PWincludenumbers = window.confirm("Include numbers ?");
  if(PWincludenumbers === true){
    userchoices = userchoices.concat(numbers)
  }
  var PWincludespecialchars = window.confirm("Include special characters ?");
  if(PWincludespecialchars === true){
    userchoices = userchoices.concat(specialCharacters)
  }
  if (PWincludelowercase === false && PWincludeuppercase === false && PWincludenumbers === false && PWincludespecialchars === false) {
    window.alert("You can't make a password without a character")
    window.location.reload()
  }

  n = userchoices.length;
  
  result = '';
  for( var i = 0 ; i < PWlength ; i++ ){
    result += userchoices[Math.floor(Math.random() * n)]
  }
  return result;

}

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
