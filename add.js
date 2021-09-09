function addBook() {
  let imageUrl = document.querySelector(".imgUrl").value;
  let bookName = document.querySelector(".bookName").value;
  let author = document.querySelector(".author").value;
  let genre = document.querySelector(".genre").value;
  let price = document.querySelector(".price").value;
  let description = document.querySelector(".description").value;
}

fetch("https://end-of-term.herokuapp.com/add-product/", {
  method: "POST",
  body: JSON.stringify({
    img_url,
    name,
    description,
    price,
    category,
    review,
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

let addForm = document.querySelector(".add-product");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
