// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  " ' ",
  " ",
  ' " ',
  "\\",
];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var setchar;

function generatePassword() {
  var pWlength = parseInt(window.prompt("length of password (8 - 128)"));
  if (!pWlength) {
    window.alert("You need to input a password length.");
    window.location.reload();
    return;
  } else if (pWlength > 128) {
    window.alert("Password is too big, try again.");
    return generatePassword();
  } else if (pWlength < 8) {
    window.alert("Password is too small, try again.");
    return generatePassword();
  }

  var userchoices = [];
  var PWincludelowercase = window.confirm("Include lower case characters ?");
  if (PWincludelowercase) {
    userchoices = userchoices.concat(lowerCase);
  }
  var PWincludeuppercase = window.confirm("Include upper case characters ?");
  if (PWincludeuppercase) {
    userchoices = userchoices.concat(upperCase);
  }
  var PWincludenumbers = window.confirm("Include numbers ?");
  if (PWincludenumbers) {
    userchoices = userchoices.concat(numbers);
  }
  var PWincludespecialchars = window.confirm("Include special characters ?");
  if (PWincludespecialchars) {
    userchoices = userchoices.concat(specialCharacters);
  }
  if (!userchoices.length) {
    window.alert("You can't make a password without a character");
    window.location.reload();
  }

  var n = userchoices.length;

  var result = "";
  for (var i = 0; i < pWlength; i++) {
    result += userchoices[Math.floor(Math.random() * n)];
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
