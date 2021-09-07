fetch("https://quiet-lowlands-03571.herokuapp.com/get-books/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    productCard(data);
  });

function productCard(cards) {
  let productsContainer = document.querySelector(".products-container");

  productsContainer.innerHTML = "";
  console.log(cards.data);
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
        <button onclick="addToCart(${card[0]})" class="card-btn">Add to Cart</button>
    </div>`;
  });
}
