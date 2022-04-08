   
        
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


       if (validRegex.test(email))
       {
           
        email_error.innerHTML="valid";
        email_error.style.color="green";
        // alert("Valid email address!");
        return true;
      }
     else      
     {
       console.log("inside else condition");
        email_error.innerHTML="invalid";
        email_error.style.color="red";
        return false;
     }
   
   }


   function validateUserName(){
       var user_name=document.getElementById("username").value;
       var username_error=document.getElementById("username_error");
      
       if(user_name.length==0){

        username_error.innerHTML="User Name is mandatory";
        username_error.style.color="red";
        return false;
    }

    if(!user_name.match(/^[A-za-z0-9\._@]+$/)){

        username_error.innerHTML="User Name is not valid";
        username_error.innerHTML="only alphabets are allowed";
        username_error.style.color="red";
        return false;

    }
    if(user_name.length>7){
        username_error.innerHTML="User name should not be greater than 6";
        username_error.style.color="red";
        return false;
    }
    
    username_error.innerHTML="valid";
    username_error.style.color="green";
    return true;
   }

function validatePassword()
{

    var password = document.getElementById("password").value;
    var password_error =document.getElementById("password_error");

    var regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ ;

    if (regexp.test(password))
    {
        password_error.innerHTML="valid";
        password_error.style.color="green";
        return true;

    }
   
    password_error.innerHTML="Password is not valid";
    password_error.innerHTML="Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
    password_error.style.color="red";
    return false;
}
//    PASSWORD
//    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

function validaterePassword(){
    var password = document.getElementById("password").value;
    var repassword =document.getElementById("confirmpwd").value;
    var confirmpwd_error =document.getElementById("confirmpwd_error");

    if (password ==  repassword)
    {
        confirmpwd_error.innerHTML="valid passwords are matching";
        confirmpwd_error.style.color="green";
        return true;

    }
   
        confirmpwd_error.innerHTML=" passwords are not matching";
        confirmpwd_error.style.color="red";
        return false;

}