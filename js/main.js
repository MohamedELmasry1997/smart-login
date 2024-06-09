// this for index.html

var getUserData = JSON.parse(localStorage.getItem("userData"));

var userEmailLogin = document.getElementById("userEmailLogin");
var userPassLogin = document.getElementById("userPassLogin");

var goBtn = document.getElementById("goBtn");
var wrong = document.getElementById("wrong");
console.log(wrong);

console.log(getUserData);

// goBtn.addEventListener('click', function () {
//   if (userEmailLogin == userEmail && userPassLogin == userPass) {
//     location.href = "./home.html";
//   } else {
//     wrong.classList.remove("d-none");
//   }
// })

// if (
//   userEmailLogin == userEmail &&
//   userPassLogin == userPass
// ) {
//   login()
// }

function login() {
  for (var i = 0; i < getUserData.length; i++) {
    if (
      getUserData[i].email == userEmailLogin.value &&
      getUserData[i].pass == userPassLogin.value
    ) {
      location.href = "./home.html";
    } else {
      wrong.classList.remove("d-none");
    }
  }
}

// wrong.addEventListener('click', function () {
//   if (userEmailLogin !== userEmail && userPassLogin !== userPass) {
//   }
//   wrong.classList.remove("d-none");
// })
