// this is my function to display my cart and what is in it
function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let counter = 0;

  let index = 0;

  let totalPrice = 0;
  // here i am creating my remove from cart cards, and displaying how it will look
  cart.forEach((card) => {
    if (card) {
      counter += 1;
      let productsContainer = document.querySelector(".products-container");
      productsContainer.innerHTML += `
      <div class="item">
          <img class="productImage" src="${card["url"]}" alt="pic">
          <h1 class="book-name">${card["bookName"]}</h1>
          <h2 class="author-name">${card["authorName"]}</h2>
          <p class="book-genre">${card["bookGenre"]}</p>
          <div class="overlay">
              <p class="description">${card["dsecription"]}</p>
          </div>
          <p class="price">${card["price"]}</p>
          <button onclick='removeFromCart(${index})' class="card-btn">Remove Book</button>
      </div>`;
      index += 1;
      // here i am creating function to calculate all the prices in the cart as well as displaying the prices on top
      let currentPrice = "";
      for (let i = 1; i < card["price"].length; i++) {
        currentPrice = currentPrice + card["price"][i];
      }
      totalPrice =
        Math.round((parseFloat(totalPrice) + parseFloat(currentPrice)) * 100) /
        100;
      document.querySelector(".cart-price").innerHTML = `
        Total Price: $${totalPrice}
      `;
    }
  });
  // if there are no items in the cart an error message will pop up
  if (!counter) {
    alert("You have no items in your cart.");
    window.location.replace("index.html");
  }
}
// here i am calling my function
showCart();
// function to remove items from my cart
function removeFromCart(index) {
  console.log(index);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let new_cart = [];
  cart.forEach((book) => {
    if (book) {
      if (book != cart[index]) {
        new_cart.push(book);
      }
    }
  });
  console.log(new_cart);
  localStorage.setItem("cart", JSON.stringify(new_cart));
  alert("book removed");
  window.location.reload();
}

// console.log(JSON.parse(localStorage.getItem("cart")));
