function addBook() {
  let imageUrl = document.querySelector(".imgUrl").value;
  let bookName = document.querySelector(".bookName").value;
  let author = document.querySelector(".author").value;
  let description = document.querySelector(".description").value;
  let genre = document.querySelector(".genre").value;
  let price = document.querySelector(".price").value;
}

fetch("https://end-of-term.herokuapp.com/add-book/", {
  method: "POST",
  body: JSON.stringify({
    imgUrl,
    bookName,
    author,
    description,
    genre,
    price,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    // "Authorisation": `jwt ${token}`
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    if (res.status_code == 201) {
      window.location.reload();
    }
  });

let addForm = document.querySelector(".adding");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
