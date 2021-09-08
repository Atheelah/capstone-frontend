fetch("https://quiet-lowlands-03571.herokuapp.com/get-books/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    productCard(data);
  });

function productCard(cards) {
  let productsContainer = document.querySelector(".products-container");

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

  alert("book added");

  window.localStorage.setItem("cart", JSON.stringify(cart));
}
