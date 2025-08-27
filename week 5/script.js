// ================================
// Part 1: Variables & Conditionals
// ================================
let userName = "Jeff"; // Example variable
let userAge = 20;

// Simple conditional logic
if (userAge >= 18) {
  document.getElementById("greeting").textContent =
    `Hello ${userName}, you are an adult.`;
} else {
  document.getElementById("greeting").textContent =
    `Hello ${userName}, you are under 18.`;
}

// ================================
// Part 2: Functions
// ================================

// Function to calculate total with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function to display total on the page
function showTotal() {
  let price = 100;
  let tax = 0.15; // 15% tax
  let total = calculateTotal(price, tax);
  document.getElementById("totalResult").textContent =
    `Total price (with tax): $${total}`;
}

// ================================
// Part 3: Loops
// ================================

// Example 1: for loop
let numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Number ${i}`;
  numberList.appendChild(li);
}

// Example 2: while loop (countdown)
console.log("Countdown:");
let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

// ================================
// Part 4: DOM Manipulation
// ================================

// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("domText").textContent = "The text has been changed!";
});

// Toggle highlight class
document.getElementById("toggleClassBtn").addEventListener("click", function() {
  document.getElementById("domText").classList.toggle("highlight");
});

// Add new list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New item " + (ul.children.length + 1);
  ul.appendChild(li);
});
