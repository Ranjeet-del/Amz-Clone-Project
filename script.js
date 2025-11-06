const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}

let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  // Add the product to the cart array
  cart.push({ name: productName, price: price });

  // Update the total price
  totalPrice += price;

  // Render the cart
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  const totalSpan = document.getElementById('total');

  // Clear the current cart content
  cartDiv.innerHTML = '';

  // Check if cart is empty
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>No items in cart</p>';
  } else {
    cart.forEach(item => {
      const productDiv = document.createElement('div');
      productDiv.textContent = `${item.name} - $${item.price}`;
      cartDiv.appendChild(productDiv);
    });
  }

  // Update the total price
  totalSpan.textContent = totalPrice;
}
