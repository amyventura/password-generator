var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
 
// Array of numeric characters to be included in password
 var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 
 // Array of lowercase characters to be included in password
 var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z"];

 // Array of uppercase characters to be included in password
 var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z"];

// empty password string 
 var password = "";
  
// listen for a click on the button to start the game
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function userOptions(){
// ask user for password options
var length = parseInt(
  prompt("How many characters would you like your password to be?")
  )

//  if password length is less than 8
 if (length < 8) {
   alert("Password must be between 8 and 128 characters long.");
   prompt("How many characters do you want your password to be?");
 }
//  if password length is more than 128
 if (length > 128) {
   alert("Password must be between 8 and 128 chanracters long.");
   prompt("How many characters do you want your password to be?");
 }
//  if password length prompt was not a number
 if (isNaN(length) === true) {
   alert("Please provide password length as a number");
   prompt("How many characters do you want your password to be?");
 }

//  Confrim lowercase characters
  var lowercase = confirm("Click OK to confrim lowercase letters in your password?");
   
//  Confirm uppercase characters
  var uppercase = confirm("Click OK to confirm uppercase letters in your password?");

//  Confirm special characters
  var special = confirm("Click OK to confirm special characters in your password?");
   
//  Confirm numbers 
  var num = confirm("Click OK to confirm numbers in your password?");

//  if password confirms were false/cancelled
 if (lowercase === false, uppercase === false, special === false, num === false) {
   alert("You must have at least 1 character type in your password");
   var lowercase = confirm("Do you want lowercase letters in your password?");
   var uppercase = confirm("Do you want uppercase letters in your password?");
   var special = confirm("Do you want special characters in your password?");
   var num = confirm("Do you want numbers in your password?");
 }
 

// Get user options and store in vars
     var passwordOptions = {
        length: length,
        lowercase: lowercase,
        uppercase: uppercase,
        special: special,
        num: num
      }


})



function generatePassword(options) {
    // Empty array for possible password for user options/confirms
    var characterArray = [];

    if (lowercase === true) {
        characterArray.push(lowerCasedCharacters);
    }

    if (uppercase === true) {
        characterArray.push(upperCasedCharacters);
    }

    if (special === true) {
        characterArray.push(specialCharacters);
    }

    if (num === true) {
        characterArray.push(numericCharacters);
    }

    // Loop for random characters within characterarray for password
    for ( var i = 0; i <= options.length; i++) {
        
        // var randomNum
        var randomElement = Math.floor(Math.random(characterArray) * characterArray.length); 
        return;       
    }
generatePassword()
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



