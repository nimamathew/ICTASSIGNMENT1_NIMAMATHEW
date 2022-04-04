// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } 
//     else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
// }

    // function validate(){
    //   let email=document.getElementById("exampleInputEmail1");
    //   let pwd  =document.getElementById("exampleInputPassword1");

    //   if(email.value==""){
    //   alert("Please enter email");
    //   return false;
    // }
    // else if(pwd.value==""){
    //   alert("Please enter password");
    //   return false;
    // }
    // else if(){

    // }

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