const products = [
  { name: 'Tomato (Fresh)', price: '₹32/kg' },
  { name: 'Onion', price: '₹28/kg' },
  { name: 'Rice (Old Stock)', price: '₹54/kg' },
];

const productList = document.getElementById('products');
products.forEach((product) => {
  const li = document.createElement('li');
  li.textContent = `${product.name} - ${product.price}`;
  productList.appendChild(li);
});

const alertText = document.getElementById('alertText');
document.getElementById('simulateAlert').addEventListener('click', () => {
  alertText.textContent = '⚠️ Thunder risk nearby. App + SMS + Call alerts triggered.';
  alertText.classList.add('alert');
});
