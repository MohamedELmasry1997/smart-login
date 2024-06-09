//  this for signup.html

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var creatAcc = document.getElementById("create");
var notValid = document.getElementById("notValid");
var validData = document.getElementById("validData");

var loginBtn = document.getElementById("loginBtn");

var signupArray = [];

// if (localStorage.getItem("userData") !== null) {
//   signupArray = JSON.parse(localStorage.getItem("userData"));
// }
creatAcc.addEventListener("click", createUser);

// el validation mesh rady yeshta3'a 3la el pass 5ales
function createUser() {
  if (validationName() == true && validationEmail() == true) {
    var userData = {
      name: userName.value,
      email: userEmail.value,
      pass: userPass.value,
    };

    signupArray.push(userData);

    localStorage.setItem("userData", JSON.stringify(signupArray));

    validData.classList.remove("d-none");
  } else {
    notValid.classList.remove("d-none");
    validData.classList.add("d-none");
  }
}

function validationName() {
  var urName = userName.value;
  var regex = /^[A-Z][a-z]{3,20}$/;
  if (regex.test(urName) == true) {
    notValid.classList.add("d-none");
    validData.classList.remove("d-none");
    return true;
  } else {
    notValid.classList.add("d-none");
    validData.classList.remove("d-none");
  }
}

function validationEmail() {
  var urEmail = userEmail.value;
  var regex = /^[a-z]{5,20}[0-9]{2,10}@(gmail|hotmail|yahoo)\.(com)$/;
  if (regex.test(urEmail) == true) {
    notValid.classList.add("d-none");
    validData.classList.remove("d-none");
    return true;
  } else {
    notValid.classList.add("d-none");
    validData.classList.remove("d-none");
  }
}

function validationPass() {
  var urPass = userPass.vlue;
  regex = /^[0-9]{4,20}$/;
  if (regex.test(urPass) == true) {
    notValid.classList.add("d-none");
    validData.classList.remove("d-none");
    return true;
  } else {
    notValid.classList.add("d-none");
    validData.classList.remove("d-none");
  }
}

loginBtn.addEventListener("click", function () {
  location.href = "./index.html";
});

// if (validationName() == true &&
//     validationEmail() == true &&
//     validationPass() == true) {
//     function createUser() {
//       var userData = {
//         email: userEmail.value,
//         name: userName.value,
//         pass: userPass.value,
//     };
//       signupArray.push(userData);
//       localStorage.setItem("userData", JSON.stringify(signupArray));
//     }
// }

// function validationName() {
//     var urName = userName.value;
//     var regex = /^[A-Z][a-z]{3,20}$/;
//     if (regex.test(urName)== true) {
//         return true
//     }
//     else {
//         // notValid.classList.remove('d-none')
//     }
// }

// function validationEmail() {
//     var urEmail = userEmail.value;
//     var regex = /^[a-z]{5,20}[0-9]{2,10}@(gmail|hotmail|yahoo)\.(com)$/;
//     if (regex.test(urEmail) == true) {

//       return true;
//     } else {
//     //   notValid.classList.remove("d-none");
//     }
// }

// function validationPass() {
//     var urPass = userPass.vlue;
//     regex = /^[0-9]{6,20}$/;
//     if (regex.test(urPass) == true) {

//         return true;
//     }
//     else {
//     }
// }

// if (validationEmail() == true && validationName() == true && validationPass() == ture) {
//     validData.classList.remove('d-none')
// }
// else {
//         notValid.classList.remove("d-none");

// }
