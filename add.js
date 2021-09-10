// creating a function to add books
//  here i have attempted to do the add book, where an admin can add books onto the web app
//  but unfortuanately it hasnt worked out
function addBook() {
  let imageUrl = document.querySelector(".imgUrl").value;
  let bookName = document.querySelector(".bookName").value;
  let author = document.querySelector(".author").value;
  let description = document.querySelector(".description").value;
  let genre = document.querySelector(".genre").value;
  let price = document.querySelector(".price").value;

  //  fetching the api and stating where it should go
  fetch("https://end-of-term.herokuapp.com/add-book/", {
    method: "POST",
    body: JSON.stringify({
      image: imageUrl,
      book_title: bookName,
      author: author,
      description: description,
      category: genre,
      price: price,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorisation: `jwt ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      if (res.status_code == 201) {
        window.location.reload();
      }
    });
}
//  adding an event listener so when the button is clicked the book is added
let addForm = document.querySelector(".adding");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
