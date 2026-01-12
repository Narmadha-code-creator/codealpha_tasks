let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("/products")
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById("products");
    if (!div) return;

    data.forEach(p => {
      div.innerHTML += `
        <p>${p.name} - ₹${p.price}
        <button onclick="addToCart(${p.id}, '${p.name}')">Add</button></p>
      `;
    });
  });

function addToCart(id, name) {
  cart.push({ id, name });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

const cartList = document.getElementById("cart");
if (cartList) {
  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name}</li>`;
  });
}

function placeOrder() {
  fetch("/order", { method: "POST" })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      localStorage.clear();
    });
}