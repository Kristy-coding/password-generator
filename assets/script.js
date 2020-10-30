// Assignment code here

// as the user how many characters they would like their password to contain
var getPassowrdLength = function (){
  var length = window.prompt("How many characters would you like your password to contain?");
  if (length < 8) {
    window.alert ("Your password must me as least 8 characters. Please try again.");
    return getPassowrdLength();
  }
  if (length > 128) {
    window.alert("Your password must be less than 129 characters. Please try again.");
    return getPassowrdLength();
  }
  if (typeof length === 'string'){
    window.alert("Password length must be provided as a number. Please try again");
    return getPassowrdLength();
  }
  else {
    console.log(length);
    return length;  
  }
    
};

getPassowrdLength();

// ask user if they want to include special characters 
var includeSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
  if(includeSpecialCharacters) {
    //then special characters should take on the value of this string array [ " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
  }
  else {
    //special characters will not be included in password generator function
  }



  // ask the user if they want to include numeric characters 
  var includeNumbers = window.confirm("Click OK to confirm including numeric characters.");
  if (includeNumbers) {
    // then include numeric characters in password generation 
  }
  else {
    //do not incude numeric characters in password generation 
  }



  // ask the user if they want to include lowercase letters 
  var includeLowercase = window.confirm("Click OK to confirm including lowercase letters.");
  if(includeLowercase){
    //then include lowercase letters in password generation
  }
  else {
    //do not include lowercase letters in password generation 
  }


  //as the user if they want to include uppercase letters 
  var includeUppercase = window.confirm("Click OK to confirm including uppercase letters.");
  if (includeUppercase) {
    // then include uppercase letters in password generation
  }
  else {
    // do not include uppercase letters in password generation
  }















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
