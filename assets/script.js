// Assignment code here


// ask the user how many characters they would like their password to contain
var getPassowrdLength = function (){
  
  var length = window.prompt("How many characters would you like your password to contain?");
  if (length < 8) {
    window.alert ("Your password must be as least 8 characters. Please try again.");
    return getPassowrdLength();
  }
  if (length > 128) {
    window.alert("Your password must be less than 129 characters. Please try again.");
    return getPassowrdLength();
  }
  if (typeof length === "string"){
    window.alert("Password length must be provided as a number. Please try again");
    return getPassowrdLength();
  }
  else {
    console.log(length);
    return length;  
  }
    
};


//getPassowrdLength();


var generatePassword = function(){ 

var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "123456789";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnop";

var selectedCharacters = '';

// // ask user if they want to include special characters 
 var includeSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
  if(includeSpecialCharacters) { selectedCharacters += specialCharacters 
  }
  console.log(selectedCharacters);
  
  // ask the user if they want to include numeric characters 
  var includeNumbers = window.confirm("Click OK to confirm including numeric characters.");
  if (includeNumbers) {
    selectedCharacters += numbers
  }
  console.log(selectedCharacters);
  

  // ask the user if they want to include lowercase letters 
  var includeLowercase = window.confirm("Click OK to confirm including lowercase letters.");
  if(includeLowercase){ 
    selectedCharacters += lowercaseLetters
  }
  console.log(selectedCharacters);
  
  //as the user if they want to include uppercase letters 
  var includeUppercase = window.confirm("Click OK to confirm including uppercase letters.");
  if (includeUppercase) { 
    selectedCharacters += uppercaseLetters 
  }
  console.log(selectedCharacters); 
  console.log(selectedCharacters.length); 

  if (selectedCharacters === null || selectedCharacters === "") {
    window.alert("You must select at least one character type. Please try again.");
    return generatePassword();
  }

  // loop through selectedCharacters string as many times as password length 
  for (i = 0; i<length; i++) {

    
  //str.charAt(Math.floor(Math.random() * str.length));
  // var lengthOfPassword = 60;
//   var lengthOfCharArray = 81;
//   for(var i = 0; i < lengthOfPassword; i++) {
//   console.log(Math.floor(Math.random() * lengthOfCharArray) + 1);

// var lengthOfPassword = 60;
// var lengthOfCharArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for(var i = 0; i < lengthOfPassword; i++) {
//   console.log(lengthOfCharArray.charAt(Math.floor(Math.random() * lengthOfCharArray.length)));
// }
// }
  }

};
generatePassword();

  















///

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
