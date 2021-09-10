// creating a function to add books
//  here i have attempted to do the add book, where a book can be added. it works but i dont have any delete or update
function addBook() {
  let image = document.querySelector(".imgUrl").value;
  let book = document.querySelector(".bookName").value;
  let author = document.querySelector(".author").value;
  let description = document.querySelector(".description").value;
  let category = document.querySelector(".genre").value;
  let price = document.querySelector(".price").value;

  //  fetching the api and stating where it should go
  fetch("https://quiet-lowlands-03571.herokuapp.com/add-book/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `jwt ${window.localStorage["jwt-token"]}`,
    },
    body: JSON.stringify({
      image: image,
      book_title: book,
      author: author,
      description: description,
      category: category,
      price: price,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      // if (res.status_code == 201) {
      //   window.location.reload();
      // }
    });
}
//  adding an event listener so when the button is clicked the book is added
let addForm = document.querySelector(".adding");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});
