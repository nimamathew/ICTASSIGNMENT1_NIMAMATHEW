   
        
    function validateName(){
        var first_name = document.getElementById("firstname").value;
        var name_error = document.getElementById("name_error");
       
         if(first_name.length==0)
         {
           
            name_error.innerHTML="First Name is mandatory";
            name_error.style.color="red";
            return false;
        }   
        if(!first_name.match(/^[A-za-z]+$/))
        {

            name_error.innerHTML="First Name is not valid";
            name_error.innerHTML="only alphabets are allowed";
            name_error.style.color="red";
            return false;

        }
        if(first_name.length>10)
        {
            name_error.innerHTML="First name should not be greater than 11";
            name_error.style.color="red";
            return false;
        }
        if(first_name.trim()==="")
         {
         
            name_error.innerHTML="First Name is should not be null";
            name_error.style.color="red";
            return false;

          }
      else 
      {
        name_error.innerHTML="valid";
        name_error.style.color="green";
        return true;
      }

    }
    

   function validateEmail()
   {
       var email = document.getElementById("email").value;
       
       var email_error = document.getElementById("email_error");

    //    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       var validRegex= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
      
       if(email.trim()==="")
       {
       
        email_error.innerHTML="Email should not be null";
        email_error.style.color="red";
          return false;

        }
      
       if (validRegex.test(email))
       {
           
        email_error.innerHTML="valid";
        email_error.style.color="green";
        // alert("Valid email address!");
        return true;
      }
     else      
     {
       
        email_error.innerHTML="invalid";
        email_error.style.color="red";
        return false;
     }
   
   }


//    function validateUserName(){
//        var user_name=document.getElementById("username").value;
//        var username_error=document.getElementById("username_error");
      

//        if(user_name.trim()==="")
//        {
       
//         username_error.innerHTML="User name should not be null";
//         username_error.style.color="red";
//           return false;

//         }

//        if(user_name.length==0)
//       {
//         username_error.innerHTML="User Name is mandatory";
//         username_error.style.color="red";
//         return false;
//       }

//     if(!user_name.match(/^[A-za-z0-9\._@]+$/))
//     {

//         username_error.innerHTML="User Name is not valid";
//         username_error.innerHTML="only alphabets are allowed";
//         username_error.style.color="red";
//         return false;

//     }
//     if(user_name.length>7)
//     {
//         username_error.innerHTML="User name should not be greater than 6 charater";
//         username_error.style.color="red";
//         return false;
//     }
    
//     username_error.innerHTML="valid";
//     username_error.style.color="green";
//     return true;
//    }

   function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

 
    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    // regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed > 2  && password.length > 8) {
        passed++;
    }

    if (password.length > 8) 
    {
       alert("password not allowed to more than 8 charaters");
       return false;
    }

    //Display status.
    var color = "";
    var strength = "";
     switch (passed) {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;
}

function validatePassword()
{

    var password = document.getElementById("password").value;
    var password_error =document.getElementById("password_error");

    var regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ ;


    if(password.trim()==="")
    {
    
        password_error.innerHTML="Password should not be null";
        password_error.style.color="red";
        return false;

     }
     console.log(password);
     console.log(password.length);
     if(password.length > 8)
     {
        password_error.innerHTML="More than 8 characters not allowed";
        password_error.style.color="red";
        return false;
        
     } 
    

  if (regexp.test(password))
    {
        password_error.innerHTML="valid";
        password_error.style.color="green";
        return true;

    }
    else 
    {
    password_error.innerHTML="Password is not valid";
    password_error.innerHTML=" Atleast one uppercase,One lowercase and <br> atleast one number must contain";
    password_error.style.color="red";
    return false;
    }
}
//    PASSWORD
//    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

function validaterePassword(){
    var password = document.getElementById("password").value;
    var repassword =document.getElementById("confirmpwd").value;
    var confirmpwd_error =document.getElementById("confirmpwd_error");

    if(repassword.trim()==="")
    {
    
        confirmpwd_error.innerHTML="Password should not be null";
        confirmpwd_error.style.color="red";
       return false;

     }
     if(repassword=="")
     {
        confirmpwd_error.innerHTML=" Null value is not allowed";
        confirmpwd_error.style.color="red";
        return false;

     }
     if (password == repassword)
    {
        confirmpwd_error.innerHTML="valid passwords are matching";
        confirmpwd_error.style.color="green";
        return true;

    }
        confirmpwd_error.innerHTML=" passwords are not matching";
        confirmpwd_error.style.color="red";
        return false;

}

function validateContactno()
{
    var contactno = document.getElementById("contactno"); 
    var contactno_error = document.getElementById("contactno_error");

    var regexpphoenum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

       // var regexp= /^\d{10}$/;
       if(contactno.value.trim()==="")
       {
       
         contactno_error.innerHTML="Contact number should not be null";
         contactno_error.style.color="red";
          return false;
   
        }
             
    if (regexpphoenum.test(contactno.value))
        {
            contactno_error.innerHTML="contact number is valid";
            contactno_error.style.color="green";
            return true;
           
        }
       
     else {
            contactno_error.innerHTML="format is not correct";
            contactno_error.innerHTML="contact number should be in one of the format<br>  XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX ";
            
            contactno_error.style.color="red";
            return false;
        }
    
    
   }

  
   function loginvalidatePassword()
   {
    var loginpassword = document.getElementById("loginpassword").value;
       var loginpassword_error =document.getElementById("loginpassword_error");

    var regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ ;
         

     if(loginpassword.trim()==="")
    {
    
        loginpassword_error.innerHTML="Password should not be null";
        loginpassword_error.style.color="red";
        return false;

     }
    
   if(loginpassword.length > 8)
   {
        loginpassword_error.innerHTML="More than 8 characters not allowed";
        loginpassword_error.style.color="red";
        return false;
        
    }
 
   
    if (regexp.test(loginpassword))
    {
        loginpassword_error.innerHTML="valid";
        loginpassword_error.style.color="green";
        return true;

    }
   
   else 
   {
    loginpassword_error.innerHTML="Password is not valid";
    loginpassword_error.innerHTML=" Atleast one uppercase,One lowercase <br>and atleast one number must contain";
    loginpassword_error.style.color="red";
    return false;
    }
   
    
   }
   

btn.addEventListener("click", function (event) 
{

 if (!validateName()) {
    
     event.preventDefault();
 }
 if (!validateEmail()) {
    
    event.preventDefault();
}
if (!validatePassword()) {
    
    event.preventDefault();
}
if (!validaterePassword()) {
    
    event.preventDefault();
}
if (!validateContactno()) {
    
    event.preventDefault();
}
});


loginbtn.addEventListener('click', function (event) 
   {
   
    if (!validateEmail()) {
       
        event.preventDefault();
    }
    if (!loginvalidatePassword()){
    
         event.preventDefault();
    }
   });
   