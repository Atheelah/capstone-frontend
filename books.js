// fetching the api
fetch("https://quiet-lowlands-03571.herokuapp.com/get-books/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    productCard(data);
  });

// this is the function for my product cards
function productCard(cards) {
  let productsContainer = document.querySelector(".products-container");
  // this is what i want displayed on my product cards eg. image, author, description etc.
  productsContainer.innerHTML = "";
  cards.data.forEach((card) => {
    productsContainer.innerHTML += `
    <div class="item">
        <img class="productImage" src="${card[6]}" alt="pic">
        <h1 class="book-name">${card[1]}</h1>
        <h2 class="author-name">${card[2]}</h2>
        <p class="book-genre">${card[3]}</p>
        <div class="overlay">
            <p class="description">${card[5]}</p>
        </div>
        <p class="price">${card[4]}</p>
        <button onclick='addToCart(${JSON.stringify(
          card
        )})' class="card-btn">Add to Cart</button>
    </div>`;
  });
}
// this my add to cart function, so what is does is when the button is clicked my product gets added
// to a cart and gets displayed on a new page
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productsContainer = document.querySelector(".products-container");

  console.log(item);

  let itemInfo = {
    url: item[6],
    bookName: item[1],
    authorName: item[2],
    bookGenre: item[3],
    dsecription: item[5],
    price: item[4],
    itemId: item[0],
  };

  cart.push(itemInfo);
  console.log(cart);
  // alert box for when a book is added
  alert("book added");
  // data is stored in the local storage
  window.localStorage.setItem("cart", JSON.stringify(cart));
}
