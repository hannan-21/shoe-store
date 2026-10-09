// Product list - add or edit shoes here
// Put your photos in the images folder and change the img path
const shoes = [
  { id: 1, name: "Cloud Runner",  type: "running", price: 89,  img: "images/cloud-runner.svg" },
  { id: 2, name: "Sprint Pro",    type: "running", price: 110, img: "images/sprint-pro.svg" },
  { id: 3, name: "Daily Canvas",  type: "casual",  price: 55,  img: "images/daily-canvas.svg" },
  { id: 4, name: "City Walker",   type: "casual",  price: 70,  img: "images/city-walker.svg" },
  { id: 5, name: "Trail Boot",    type: "boots",   price: 135, img: "images/trail-boot.svg" },
  { id: 6, name: "Winter Hiker",  type: "boots",   price: 150, img: "images/winter-hiker.svg" }
];

let cart = [];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const cartEl = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");

function showShoes(type) {
  const list = type === "all" ? shoes : shoes.filter(s => s.type === type);

  grid.innerHTML = list.map(s => `
    <article class="card">
      <img src="${s.img}" alt="${s.name}">
      <div class="info">
        <h3>${s.name}</h3>
        <p class="type">${s.type}</p>
        <div class="row">
          <span class="price">$${s.price}</span>
          <button class="add" data-id="${s.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

function drawCart() {
  document.getElementById("cartCount").textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<li class="empty">Your cart is empty.</li>';
  } else {
    cartItems.innerHTML = cart.map((item, i) => `
      <li>
        <span>${item.name}</span>
        <span>$${item.price}<button data-remove="${i}" aria-label="Remove ${item.name}">&times;</button></span>
      </li>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cartTotal").textContent = total;
}

// Filter buttons
filters.addEventListener("click", e => {
  if (!e.target.matches(".filter")) return;
  document.querySelector(".filter.active").classList.remove("active");
  e.target.classList.add("active");
  showShoes(e.target.dataset.type);
});

// Add to cart
grid.addEventListener("click", e => {
  if (!e.target.matches(".add")) return;
  const shoe = shoes.find(s => s.id === Number(e.target.dataset.id));
  cart.push(shoe);
  drawCart();
});

// Remove from cart
cartItems.addEventListener("click", e => {
  if (e.target.dataset.remove === undefined) return;
  cart.splice(Number(e.target.dataset.remove), 1);
  drawCart();
});

// Open / close cart
document.getElementById("cartBtn").addEventListener("click", () => cartEl.classList.add("open"));
document.getElementById("closeCart").addEventListener("click", () => cartEl.classList.remove("open"));

// Start
showShoes("all");
drawCart();
