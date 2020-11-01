

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
  if (length >= 8 && length <= 128) {
     console.log(length);
     return length;
  }
  else{
    window.alert("Password length must be provided as a number. Please try again");
    return getPassowrdLength();
  }
   
 };
 

// genereate password function 
var generatePassword = function() { 

var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "123456789";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnop";

var selectedCharacters = '';
var password = '';

var passwordLength = getPassowrdLength();

 // ask user if they want to include special characters 
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

  // loop through selectedCharacters string as many times as password length and randomly select a character fromt the string each time 
  
  for (var i = 0; i<passwordLength; i++) {

    //charAt is taking the number that Math.random is slecting and mapping that number to an index on the string, charAt then returns the string character at that index 

    randomCharacters = (selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length)));
    console.log(randomCharacters);

    password += randomCharacters
    
  }
  console.log(password);
  return password;
};


 
// call function from click and add text to textbox 
function writePassword (){
  password = generatePassword();

  // add password to textbox/display
document.getElementById("password").value = password;
}

document.querySelector("#generate").addEventListener("click",writePassword);

