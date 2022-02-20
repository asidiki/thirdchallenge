// Assignment code here

//input variables
var input;
var selectNumbers;
var selectSpcChar;
var selectUprcase;
var selectLwrcase;

//arrays
SpcChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "_", "|", "-", "=", "+", "/", "/"];
Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var selectedChoices;

//convert lwrCase to UprCase
var CnvUprCase = function (x) {
  return x.toUpperCase();
};

UprCase = Letters.map(CnvUprCase);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //ask for input
  input = parseInt(window.prompt("Select the length of your password between 8 and 128 characters"));
  if (!input) {
    window.alert("Must select the lenth of your password");
    //validate
  } else if (input < 8 || input > 128) {
    input = parseInt(window.prompt("Password needs to be between 8 and 128 characters"));

  } else {
    selectNumbers = window.confirm("Will this password contain numbers?");
    selectSpcChar = window.confirm("Will this password contain special characters?");
    selectUprcase = window.confirm("Will this password contain Uppercase letters");
    selectLwrcase = window.confirm("Will this password contain Lowercase letters?");
  };

  //if no to all options
  if (!selectNumbers && !selectSpcChar && !selectUprcase && !selectLwrcase) {
    selectedChoices = window.alert("Choose a criteria");
  //all selected
  } else if (selectNumbers && selectSpcChar && selectUprcase && selectLwrcase) {
    selectedChoices = SpcChar.concat(Numbers, Letters, UprCase);

  // 3 selected - 1
  } else if (selectSpcChar && selectNumbers && selectLwrcase) {
    selectedChoices = SpcChar.concat(Numbers, Letters);
  // 3 selected - 2
  } else if (selectSpcChar && selectNumbers && selectUprcase) {
    selectedChoices = SpcChar.concat(Numbers, UprCase);
  //3 selected - 3
  } else if (selectSpcChar && selectLwrcase && selectUprcase) {
    selectedChoices = SpcChar.concat(Letters, UprCase);
  //3 selected - 4
  } else if (selectNumbers && selectLwrcase && selectUprcase) {
    selectedChoices = Numbers.concat(Letters, UprCase);

  // 2 seletced - 1
  } else if (selectSpcChar && selectNumbers) {
    selectedChoices = SpcChar.concat(Numbers);
  // 2 selected - 2
  } else if (selectSpcChar && selectLwrcase) {
    selectedChoices = SpcChar.concat(Letters);
  // 2 selected -3
  } else if (selectSpcChar && selectUprcase) {
    selectedChoices = SpcChar.concat(UprCase);
  //2 selected -4
  } else if (selectLwrcase && selectNumbers) {
    selectedChoices = Letters.concat(Numers);
  //2 selected -5
  } else if (selectLwrcase && selectUprcase) {
    selectedChoices = Letters.concat(UprCase);
  //2 selected -6
  } else if (selectNumbers && selectUprcase) {
    selectedChoices = Numbers.concat(UprCase);

  //1 selected
  }else if (selectLwrcase) {
    selectedChoices = Letters;
  }else if (selectNumbers) {
    selectedChoices = Numbers;
  }else if (selectSpcChar) {
    selectedChoices = SpcChar;
  }else if (selectUprcase) {
    selectedChoices = UprCase;
  };

  var pwd = [];

  //random selection of all variables
  for (var i = 0; i < input; i++) {
    var selection = selectedChoices[Math.floor(Math.random() * selectedChoices.length)];
    pwd.push(selection);
  }

  var genpwd = pwd.join("");
  return genpwd;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


