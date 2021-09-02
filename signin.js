// fetch("https://quiet-lowlands-03571.herokuapp.com/")
// .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

//   let signinBtn = document.querySelector(".sign-in-btn").addEventListener("click",
//   function signIn() {
//     let username = document.querySelector("#username").value;
//     let password = document.querySelector("#password").value;
//     console.log(username,password);
// }
//   );

//   fetch("https://quiet-lowlands-03571.herokuapp.com/", {
//     method: "PATCH",
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//     if (!res.data) {
//       document.querySelector("#error").innerHTML =
//         "Please register";
//       return;
//     } else {
//       localStorage.setItem("user", JSON.stringify(res.data));
//       window.location = "./index.html";
//     }
//   });

// fetch("https://quiet-lowlands-03571.herokuapp.com")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function login() {
  // GETTING DATA FROM FORM
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(username, password);

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
        document.querySelector("#error").innerHTML = "Please register";
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location = "./index.html";
      }
    });
}
