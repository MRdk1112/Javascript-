let quantity = 1;
const pricePerItem = 114999;
const qtyInput = document.getElementById("qty");
const subtotalEl = document.getElementById("subtotal");

function changeQty(delta) {
  quantity = Math.max(1, quantity + delta);
  qtyInput.value = quantity;
  subtotalEl.textContent = `₹${(quantity * pricePerItem).toFixed(2)}`;
}
