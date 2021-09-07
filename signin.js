// function to login
function login() {
  // GETTING DATA FROM FORM
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(username, password);
  // api created in the back
  fetch("https://quiet-lowlands-03571.herokuapp.com/login/", {
    method: "PATCH",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (!res.data) {
        alert("User not registered!");
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location = "./books.html";
      }
    });
}
var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function () {
  document.querySelector("#flipper").classList.toggle("flip");
};

registerButton.onclick = function () {
  document.querySelector("#flipper").classList.toggle("flip");
};

// heroku link --> ("https://quiet-lowlands-03571.herokuapp.com")

function registration() {
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password ").value;
  let email = document.querySelector("#email").value;
  console.log(firstName, lastName, username, password, email);

  fetch("https://quiet-lowlands-03571.herokuapp.com/registration/", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      password,
      email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.status_code == 201);
      {
        document.querySelector("#error").innerHTML =
          "You've been registered successfully";
        setTimeout(function () {
          window.location = "./sign in.html";
        }, 3000);
      }
    });
}
