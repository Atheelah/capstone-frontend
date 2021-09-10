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
        getToken(username, password);
        localStorage.setItem("user", JSON.stringify(res.data));
        setTimeout((window.location = "./books.html"), 10000);
      }
    });
}

function getToken(username, password) {
  fetch(`https://quiet-lowlands-03571.herokuapp.com/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.localStorage["jwt-token"] = data.access_token;
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
// registration function
function registration() {
  let first_name = document.querySelector("#first-name").value;
  let last_name = document.querySelector("#last-name").value;
  let username = document.querySelector("#r-username").value;
  let password = document.querySelector("#r-password").value;
  // let email = document.querySelector("#email").value;
  console.log(first_name, last_name, username, password);
  //  fetching api in the back
  fetch("https://quiet-lowlands-03571.herokuapp.com/registration/", {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      // email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.status_code == 201);
      {
        document.querySelector("#error").innerHTML +=
          "You've been registered successfully";
        setTimeout(function () {
          window.location.href = "signin.html";
        }, 3000);
      }
    });
}
