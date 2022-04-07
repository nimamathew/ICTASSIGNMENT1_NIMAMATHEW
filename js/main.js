   
    var name_error=document.getElementById("name_error");

    function validteName(){
        var first_name=document.getElementById("firstname").value;
      
        if(first_name.length==0){
            name_error.innerHTML="First Name is mandatory";
            return false;
        }
    if(first_name.match(/^[\.,_*&%]$/)){

            name_error.innerHTML="First Name is not valid";
            return false;

        }
        if(first_name.length>8){
            name_error.innerHTML="First name should not be greater than 8";
            return false;
        }

        name_error.innerHTML="valid";
        return true;

    }
    





   function validate()
   {
       let email=document.getElementById("email");
       let pwd  =document.getElementById("pwd");

       if(email.value.trim()==""||pwd.value.trim()==""){
       alert("Fields can't empty");
       return false;
       }
       else {
           return true;

       }


   }


    function validation(){
        let regexpr=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
        if(regexpr.test(email.value)){
            error.innerHTML="valid";
            error.style.color="green";
            return true;
        }
        else {
            error.innerHTML="invalid";
            error.style.color="red";
            return false;
        }
    
    }