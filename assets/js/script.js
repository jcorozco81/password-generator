// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//new code
function generatePassword(){

//variables
var specialcharlist_uc=['\u0020','\u0021','\u0022','\u0023','\u0024','\u0025','\u0026','\u0027','\u0028','\u0029','\u002A','\u002B','\u002C','\u002D','\u002E','\u002F','\u003A','\u003B','\u003C','\u003D','\u003E','\u003F','\u0040','\u005B','\u005C','\u005D','\u005E','\u005F','\u0060','\u007B','\u007C','\u007D','\u007E'];
var alphabetcharlist_lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetcharlist_uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbercharlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password_length=100;
var type_selections = [true, true, true, true]; // 0: lowercase, 1: uppercase, 2: numbers, 3: special characters.
var selections_done = false;
// var selections = {
//     sel_lowercase: true,
//     sel_uppercase: true,
//     sel_numeric: true,
//     sel_specialchar: true,
// }
var final_password = "";
var types = ["lowercase Letters (abcd)", "uppercase Letters (ABCD)", "Numbers (1234)", "special characters (#$%&)"];

do{
password_length = prompt("Please enter the password length. Password must be between 8-128 Characters Long");

// If the cancel button is clicked, the while loop will break.
if (password_length == null){
  break;
}
// If its blank, a message.
else if (password_length == "") {
  alert("Please enter a value.");
}
//if its within the parameters, confirm selection.
else if (password_length >= 8 && password_length <= 128)
  {
    //If its not confirmed, will restart loop.
    if(!confirm("Value entered:" + password_length))
      {
      password_length=null;
      }
  }
//Value not within parameters will continue loop until good values are entered
  else{
    alert("Please enter a value between 8 and 128");
  }   
}
while (password_length < 8 || password_length > 128);


// If the password lenth entry box is canceled, function will be canceled 
if(password_length != null)
{

do{

  for (var i=0; i < types.length; i++){
      if (confirm("Do you want to inclue " + types[i] + " in your password"))
          {
            type_selections[i]=true;
          }
      else{
            type_selections[i] = false;
          }
    }
if (type_selections[0] == true || type_selections[1] == true || type_selections[2] == true || type_selections[3] == true)
  {
  if (confirm("Please confirm your selections: \nContain Special Caracters: " + type_selections[0] + "\nContain Uppercase Letters: " + type_selections[1] + "\nContain Lowercase Letters: " + type_selections[2] + "\nContain Numbers: " + type_selections[3]))
    {
      selections_done = true;
    }
  else
    {
      selections_done = false;
    }
  }
else {
  if (confirm("You have to select at least one type, do you want to continue?"))
  {

  }
else{
  break;
}

}
} while(selections_done==false);
// while(sel_lowercase == true || sel_uppercase == true || sel_numeric == true || sel_specialchar == true)
// alert("test");

//Confirm Selections
alert("You have selected the follwing:\nPassword Length: " + password_length + "\nContain Special Caracters: " + type_selections[0] + "\nContain Uppercase Letters: " + type_selections[1] + "\nContain Lowercase Letters: " + type_selections[2] + "\nContain Numbers: " + type_selections[3]);

// if (type_selections[0])
//   {
//     var character_pool [i]=type_selections[i];
//   }
// }

// document.getElementById("demo").innerHTML = txt;



  final_password = "Ok";
  return final_password;
}

// If its canceled

else{
final_password =  "Canceled by user, click on Generate Password to restart";
return final_password;}

function randomize_pass()
{
  
}


}