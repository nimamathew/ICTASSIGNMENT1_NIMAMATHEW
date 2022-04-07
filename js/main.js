var first_name=document.getElementById("firstname");


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