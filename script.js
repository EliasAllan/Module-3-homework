// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userchoices = []
var setchar ;
var result = " " ;



function generatePassword() {
  var PWlength = window.prompt("length of password (8 - 128)");
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
  }

  setchar = userchoices;
  console.log(setchar)

  for( var i = 0 , n = setchar.length ; i < PWlength ; i++ ){
    result += setchar [Math.floor(Math.random() * n)]
  }
  return result;



  
//   if (PWincludelowercase === true && PWincludeuppercase === false && PWincludenumbers === false && PWincludespecialchars === false) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyz";
//     var newpassword = '';

//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (25 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === false && PWincludenumbers === true && PWincludespecialchars === false) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyz123456789123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (43 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === true && PWincludenumbers === false && PWincludespecialchars === false) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (51 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === true && PWincludenumbers === false && PWincludespecialchars === false) {
//     var lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (25 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === false && PWincludenumbers === true && PWincludespecialchars === false) {
//     var lowercase = "123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (8 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === false && PWincludenumbers === false && PWincludespecialchars === true) {
//     var lowercase = "!@#$%^&*?/.,";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (11 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === true && PWincludenumbers === true && PWincludespecialchars === false) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (60 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === true && PWincludenumbers === false && PWincludespecialchars === true) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?/.,";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (63 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === true && PWincludenumbers === true && PWincludespecialchars === true) {
//     var lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?/.,123456789123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (55 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === false && PWincludenumbers === true && PWincludespecialchars === true) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyz123456789123456789!@#$%^&*?/.,!@#$%^&*?/.,";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (67 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === false && PWincludenumbers === false && PWincludespecialchars === true) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyz!@#$%^&*?/.,!@#$%^&*?/.,";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (49 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === true && PWincludenumbers === true && PWincludespecialchars === false) {
//     var lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (43 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === true && PWincludenumbers === false && PWincludespecialchars === true) {
//     var lowercase = "!@#$%^&*?/.,!@#$%^&*?/.,ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (49 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === false && PWincludenumbers === true && PWincludespecialchars === true) {
//     var lowercase = "!@#$%^&*?/.,123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (20 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === true && PWincludeuppercase === true && PWincludenumbers === true && PWincludespecialchars === true) {
//     var lowercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?/.,123456789!@#$%^&*?/.,123456789";
//     var newpassword = '';
//     for (i = 0; i < PWlength; i++) {
//       var randomcharacter = (lowercase[Math.floor(Math.random() * (93 - 0) + 0)])

//       newpassword = newpassword + randomcharacter;
//     }

//     return newpassword;

//   } else if (PWincludelowercase === false && PWincludeuppercase === false && PWincludenumbers === false && PWincludespecialchars === false) {
//     window.alert("You can't make a password without a character")
//   }
}

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
