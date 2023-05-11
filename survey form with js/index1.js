document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
 
    checkData();
 });
 
 var Name = document.getElementById("Name");
 var email = document.getElementById("email");
 var phone = document.getElementById("phone");
 var age = document.getElementById("age");
 var pass1 = document.getElementById("pass1");
 var pass2 = document.getElementById("pass2");
 
 
 
 function checkData() {
    var NameValue = Name.value.trim();
    var emailValue = email.value.trim();
    var phoneValue = phone.value.trim();
    var ageValue = age.value.trim();
    var pass1Value = pass1.value.trim();
    var pass2Value = pass2.value.trim();
 



    if (NameValue == "") {
       setError(Name, "Username should not be empty");
    } else {
       setSuccess(Name);
    }
 
    if (emailValue == "") {
       setError(email, "Email can't be blank");
    } else if (!isEmail(emailValue)) {
       setError(email, "Email is not Valid");
    } else {
       setSuccess(email);
    }
    
    
    
    if (phoneValue == "") {
      setError(phone, "phone should not be empty");
   } else {
      setSuccess(phone);
   }








   if (ageValue<0) {
      setError(age, "age is not negative");
   } else if (age>-0) {
      setError(age, "age is positive");
   }
   else {
      setSuccess(age);
   }












    if (pass1Value == "") {
       setError(pass1, "Password can't be blank");
    } else {
       setSuccess(pass1);
    }
 
 
    if (pass2Value == "") {
       setError(pass2, "Password can't be blank");
    } else if (pass1Value !== pass2Value) {
       setError(pass2, "Password does not match");
    } else {
       setSuccess(pass2);
    }

    
   }
 









 
 
 function setError(u, msg) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field error";
    var span = parentBox.querySelector("span");
    var fa = parentBox.querySelector(".fa");
    span.innerText = msg;
    fa.className = "fa fa-exclamation-circle";
 }
 
 function setSuccess(u) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
 }



 function ame(n) {
    var reg='/^[^a-zA-Z]*$/';
    return reg.test(n);
   }




 
 function isEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
 }


 function Phone(p) {
   var reg =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   return reg.test(p);
 }
function isAge(a) {
   var reg = /^\S[0-9]{0,3}$/;
   return reg.test(a);
 }