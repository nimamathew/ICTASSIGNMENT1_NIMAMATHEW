   
    var name_error=document.getElementById("name_error");
    var email_error=document.getElementById("email_error");
    var username_error=document.getElementById("username_error");


    function validteName(){
        var first_name=document.getElementById("firstname").value;
      
        if(first_name.length==0){
            name_error.innerHTML="First Name is mandatory";
            return false;
        }
    if(!first_name.match(/^[\w]+$/)){

            name_error.innerHTML="First Name is not valid";
            name_error.innerHTML="only alphanumeric characters allowed";
            name_error.style.color="red"
            return false;

        }
        if(first_name.length>10){
            name_error.innerHTML="First name should not be greater than 11";
            name_error.style.color="red"
            return false;
        }

        name_error.innerHTML="valid";
        name_error.style.color="green";
        return true;

    }
    

   function validteEmail()
   {
       var email=document.getElementById("email");
       let regexpr=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/

       if(regexpr.test(email.value)){
        email_error.innerHTML="valid";
        email_error.style.color="green";
        return true;
    }
    else {
        email_error.innerHTML="invalid";
        email_error.style.color="red";
        return false;
    }

   }


   