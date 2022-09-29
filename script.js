let username;
let email;
let password;
let confirmP; 
let number;
let get;
let captcha = new Array();
let usernameRegex= /^[a-zA-Z0-9\.-_@#]{6,50}$/;
let emailAddressRegex= /^[a-zA-Z0-9\.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
let passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#\+\*\$]){8,70}/;

let data ={nigeria:{code:"+234", regex:/^[0-9]{10,11}$/}, 
ghana:{code:"+233", regex:/^[0-9]{9}$/},
uK:{code:"+44", regex:/^[0-9]{4}[0-9]{6}$/},
uS:{code:"+1", regex:/^[2-9]{1}[0-9]{2}[0-9]{7}$/}
}

// console.log(passwordRegex.test('Aaa992+$'));
let emailErr = document.querySelector('.emailError');
let pswrdErr = document.querySelector('.pswrdError');
let usrnErr = document.querySelector('.usrnError');
let passcErr = document.querySelector('.passcError');
let numErr = document.querySelector('.numError');




function validateIt() {


username= usernameBox.value;
console.log(username);
email =emailBox.value;
console.log(email)
password= passwordBox.value;
console.log(password)
confirmP= confirmPbox.value; 
console.log(confirmP)
number = numberBox.value;
console.log(number);


// to validate username
  if (usernameRegex.test(username)) {
      console.log("valid")
      alert("username valid")
    //   displayUS.innerHTML = `<p class="text-white"> valid username</p>`
  } else if (username=="") {
    alert("fill username field")
  }else{
    usrnErr.hidden=false;
    //   displayUS.innerHTML = `<p class="text-dark"> invalid username</p>`
    setTimeout(() => {
        // displayUS.innerHTML=''
        usrnErr.hidden=true;
        }, 5000);
  }

//   to validate email address
    if (emailAddressRegex.test(email)) {
        alert("email address valid")
    //   displayEA.innerHTML = `<p class="text-white"> valid email address</p>`
    } else if (email=="") {
        alert("fill email field")
    }
    else {
        emailErr.hidden=false;
        // displayEA.innerHTML = `<p class="text-dark"> invalid email address</p>`
        setTimeout(() => {
            // displayEA.innerHTML=''
            emailErr.hidden=true;
                
            }, 5000);
    }
     
    // to validate password

    if (passwordRegex.test(password)) {
        alert("password is valid")
        // displayP.innerHTML = `<p class="text-white"> valid password </p>`
    }else if (password=="") {
        alert("fill password field")
      }
     else {
        // alert(password)
        // displayP.innerHTML = `<p class="text-danger" > invalid password </p>`
        pswrdErr.hidden=false;
        setTimeout(() => {
            // displayP.innerHTML=''    
            pswrdErr.hidden=true;
            }, 5000);
   
        
    }

//  to confirm accuracy
    if (password === confirmP && password !== "") {
        alert("accurate password")
    }
       else if (confirmP=="") {
      alert("fill in previous field")
  }
 
    else{
        alert("wrong pasword")
        passcErr.hidden=false;
        // displayCP.innerHTML =
         setTimeout(() => {
            passcErr.hidden=true;
            // displayCP.innerHTML=''            
            }, 3000);
    }

  // to validate number
  valider()
   usernameBox.value ="";
  emailBox.value ="";
 passwordBox.value ="";
   confirmPbox.value =""; 
 numberBox.value ="";
  
 if (errCaptcha.innerHTML !=="Done!") {
  alert("fill captcha first then try again")
 }
   
}


function valider(){
    console.log(selekt.value);
if (selekt.value =="nigeria") {

 get=  data.nigeria.regex.test(numberBox.value);

    if (get) {
        alert('valid Nigerian number')
    } else if ( numberBox.value !==""){
        // alert('invalid Nigeria number')
        numErr.hidden=false;
        // displayPN.innerHTML = `<p class="text-danger"> invalid Nigerian number </p>`

        setTimeout(() => {
            numErr.hidden=true;
        // displayPN.innerHTML=''
            
        }, 3000);
    }
} 
if (selekt.value =="ghana") {

 get=  data.ghana.regex.test(numberBox.value);

    if (get) {
        alert('valid ghanian number')
    } else{
        // alert('invalid ghanian number')
        numErr.hidden=false;
        // displayPN.innerHTML = `<p class="text-danger"> invalid Nigerian number </p>`

        setTimeout(() => {
            numErr.hidden=true;
        // displayPN.innerHTML=''
            
        }, 3000);
    }
} 
if (selekt.value =="uS") {

 get=  data.uS.regex.test(numberBox.value);

    if (get) {
        alert('valid U.S number')
    } else{
        // alert('invalid ghanian number')
        numErr.hidden=false;
        // displayPN.innerHTML = `<p class="text-danger"> invalid Nigerian number </p>`

        setTimeout(() => {
            numErr.hidden=true;
        // displayPN.innerHTML=''
            
        }, 3000);
    }
} 
if (selekt.value =="uK") {

 get=  data.uK.regex.test(numberBox.value);

    if (get) {
        alert('valid U.K number')
    } else{
        // alert('invalid ghanian number')
        numErr.hidden=false;
        // displayPN.innerHTML = `<p class="text-danger"> invalid Nigerian number </p>`

        setTimeout(() => {
            numErr.hidden=true;
        // displayPN.innerHTML=''
            
        }, 3000);
    }
} 

else if (numberBox.value=="") {
    alert("fill in number field")
}
// else if(get !== numberBox.value){
//   alert('check country code') 
// }



}


  // to validate captcha

function createCaptcha() {
 let activeCaptcha = document.getElementById("randoms");

    for (i = 0; i < 6; i++) {
      if (i % 2 == 0) {
        captcha[i] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      } else {
         captcha[i] = Math.floor(Math.random() * 10 + 0);
      }
    }
    theCaptcha = captcha.join("");
    activeCaptcha.innerHTML = `${theCaptcha}`;
  }


  function validateCaptcha() {
    const errCaptcha = document.getElementById("errCaptcha");
    const reCaptcha = document.getElementById("reCaptcha");
    recaptcha = reCaptcha.value;
    let validateCaptcha = 0;
    for ( let i = 0; i < 6; i++) {
      if (recaptcha.charAt(i) != captcha[i]) {
        validateCaptcha++;
      }
    }
    if (recaptcha == "") {
      errCaptcha.innerHTML = `<p class="info">Re-Captcha must be filled</p>`;
    } else if (validateCaptcha > 0 || recaptcha.length > 6) {
      errCaptcha.innerHTML =  `<p class="info">Wrong captcha!! You're a robot</p>` ;
    } else {
      errCaptcha.innerHTML = `<p class="info">Done!!</p>`;
    }
  }