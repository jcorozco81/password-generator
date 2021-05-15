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
  var charsets = [ ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],['\u0020','\u0021','\u0022','\u0023','\u0024','\u0025','\u0026','\u0027','\u0028','\u0029','\u002A','\u002B','\u002C','\u002D','\u002E','\u002F','\u003A','\u003B','\u003C','\u003D','\u003E','\u003F','\u0040','\u005B','\u005C','\u005D','\u005E','\u005F','\u0060','\u007B','\u007C','\u007D','\u007E']];
  
    var password_length=0;
    var type_selections = [true, true, true, true]; // 0: lowercase, 1: uppercase, 2: numbers, 3: special characters.
    var selections_done = false;
    var final_password = "";
    var types = ["lowercase letters?\n(Example: abcd)", "uppercase letters?\n(Example: ABCD)", "numbers?\n(Example: 1234)", "special characters?\n(Example: #$%&)"];
    var charpool = [];

    //Password Length selection

  do{
    password_length = prompt("Please enter a number for desired password character length. The number must be an integer number between 8 and 128.");
    
    // If the cancel button is clicked, the while loop will break.
    if (password_length == null){
      break;
    }

    // If the text box is left blank, the following message will be displayed.
    else if (password_length == "") {
      alert("Please enter a value.");
    }

    //If the number entered is within 8 and 128, the user will confirm selection.
    else if (password_length >= 8 && password_length <= 128){
      console.log("Password Length: "+ password_length);
    
      // If its not confirmed, the loop will restart.
      if(!confirm("Value entered:" + password_length)){
        password_length=null;                            
      }
    }

    //If the number entered is not within the parameters, the loop will continue until good values are entered.
    else{
      alert("Please enter a value between 8 and 128");
    }

  }while (password_length < 8 || password_length > 128);


  // If the password lenth entry box is canceled, function will be canceled 
  if(password_length != null){
    selectchartypes();
    return returnfunction();
  }

  else{
    return returnfunction();
  }









function selectchartypes(){
  do{
    for (var i=0; i < types.length; i++){
      if (confirm("Do you want to include in your password " + types[i])){
            type_selections[i]=true;
          }
      else{
            type_selections[i] = false;
          }
    }
    if (type_selections[0] == true || type_selections[1] == true || type_selections[2] == true || type_selections[3] == true){
      if (confirm("Please confirm your selections: \nContain Special Caracters: " + type_selections[0] + "\nContain Uppercase Letters: " + type_selections[1] + "\nContain Lowercase Letters: " + type_selections[2] + "\nContain Numbers: " + type_selections[3] + "\nPress Ok to accept the selections or Cancel to select again the character types.")){
        selections_done = true;
        }
      else{
        selections_done = false;
        }
      }
    else{
      if (confirm("You have to select at least one type, do you want to continue?")){
      }
      else{
        selections_done = null;
        break;
      }
    }
  } while(selections_done===false);
}




//The following fuction receives the character pool in form of an array and the the password length and then it returns the password.

  function randomize(to_rand_array, plength){

    var password_array = [];
  
    console.log("Parameters received: "+ to_rand_array + " and " + plength); //for debuging
  
    for (var i=0; i<plength; i++){
      var x = (Math.floor(Math.random() * (to_rand_array.length - 0) + 0));
      console.log(x); //for debuging
      password_array[i] = to_rand_array[x];
      console.log(password_array[i]); //for debuging
      }
    console.log(password_array); //for debuging

    return password_array.join('');
  }





  function returnfunction()
    {
      var return_password="";
      if(password_length != null && selections_done != null){

        //Confirm Selections
        alert("You have selected the follwing:\nPassword Length: " + password_length + "\nThe password will:\n- Contain Special characters. " + type_selections[0] + "\n- Contain Uppercase characters. " + type_selections[1] + "\n- Contain Lowercase characters? " + type_selections[2] + "\n- Contain Numeric characters? " + type_selections[3]);
        
        // Create the character pool based on selections
        for(var i=0; i<charsets.length; i++){
          if(type_selections[i]){
            console.log("Will concat: "+types[i]);
            charpool = charpool.concat(charsets[i]);
            console.log(charsets[i]);
          }
        }
        console.log("Result: " + charpool); //Debug

      //Return final password to the Webpage.
        return_password = randomize(charpool, password_length);
        return return_password;
      }
      //If its canceled by user.
      else{
        return_password =  "Canceled by user, click on Generate Password to restart";
        return return_password;
      }
    }
}