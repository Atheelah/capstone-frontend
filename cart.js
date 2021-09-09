function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let counter = 0;

  let index = 0;

  let totalPrice = 0;

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
  if (!counter) {
    alert("You have no items in your cart.");
    window.location.replace("index.html");
  }
}

showCart();

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
