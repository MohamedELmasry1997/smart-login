var logOut = document.getElementById("logOut");

var getUserData = JSON.parse(localStorage.getItem("userData"));
var wellcome = document.getElementById("wellcome");
// console.log(wellcome)

// console.log(getUserData)

for (var i = 0; i < getUserData.length; i++) {
  wellcome.innerHTML += " " + getUserData[i].name;
}

logOut.addEventListener("click", function () {
  window.location.href = "./index.html";
});
