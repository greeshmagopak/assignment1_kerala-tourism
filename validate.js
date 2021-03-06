let pwd=document.getElementById("exampleInputPassword1");
let cpwd=document.getElementById("exampleConfirmPassword1");
let email=document.getElementById("exampleInputEmail");

let phoneno=document.getElementById("phoneno");
var password1 = document.getElementById("password1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// phone no validation
// When the user clicks on the phone no field, show the message box
phoneno.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the phone no field, hide the message box
phoneno.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the phoneno field
function validatePhoneno() {
  // Validate numbers
  var numbers = /[0-9]/g;
  if(phoneno.value.match(numbers)) {  

    phoneno.setCustomValidity(' ');
  }
  else{
    phoneno.setCustomValidity("Phone number should contain numbers only!");

  }
// validate length
  if(phoneno.value.length < 10) {
    phoneno.setCustomValidity("Phone number should contain 10 digits!");
  }
  else if(phoneno.value.length > 10){
    phoneno.setCustomValidity("Phone number should contain 10 digits only!");
   
  } 
  else if(phoneno.value.length == 10) {
    phoneno.setCustomValidity(' ');
}
}

 phoneno.onsubmit = validatePhoneno;



// When the user clicks on the password field, show the message box
pwd.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pwd.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// password validation
// When the user starts to type something inside the password field
pwd.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pwd.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pwd.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pwd.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(pwd.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function validatePassword(){
    if(pwd.value != cpwd.value) {
      cpwd.setCustomValidity("Passwords Don't Match");
    } else {
      cpwd.setCustomValidity('');
    }
  }
  
  pwd.onchange = validatePassword;
  cpwd.onkeyup = validatePassword;

  