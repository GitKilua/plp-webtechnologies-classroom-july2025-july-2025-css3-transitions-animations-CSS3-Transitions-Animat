// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable to hold fruit data
const fruits = [
  { name: "Apple", color: "#ff4d4d" },
  { name: "Banana", color: "#ffe135" },
  { name: "Orange", color: "#ff9f00" },
  { name: "Grape", color: "#6f2da8" },
  { name: "Strawberry", color: "#fc5a8d" },
  { name: "Blueberry", color: "#4f86f7" },
  { name: "Watermelon", color: "#fc6c85" },
  { name: "Pineapple", color: "#f7e967" },
  { name: "Kiwi", color: "#8ee53f" },
  { name: "Lemon", color: "#fff44f" },
  { name: "Cherry", color: "#de3163" },
  { name: "Mango", color: "#ffb347" },
  { name: "Peach", color: "#ffcba4" },
  { name: "Pear", color: "#d1e231" },
  { name: "Plum", color: "#8e4585" },
  { name: "Raspberry", color: "#e30b5d" },
  { name: "Blackberry", color: "#4b0082" },
  { name: "Cantaloupe", color: "#ffa07a" },
  { name: "Papaya", color: "#ff6f61" },
  { name: "Apricot", color: "#fbceb1" },
  { name: "Coconut", color: "#f5f5dc" },
  { name: "Fig", color: "#70543e" },
  { name: "Guava", color: "#f8b878" },
  { name: "Lychee", color: "#f9c6c9" },
  { name: "Nectarine", color: "#ff6347" },
  { name: "Passionfruit", color: "#d05e2d" },
  { name: "Pomegranate", color: "#f34723" },
  { name: "Tangerine", color: "#ffcc00" },
  { name: "Tomato", color: "#ff6347" },
  { name: "Dragonfruit", color: "#ff3399" }
];

// Local scope example: function to create a fruit card element
function createFruitCard(fruit) {
  // fruit is a parameter (local scope)
  const card = document.createElement("div");
  card.classList.add("fruit-card");

  // Inner container for flip effect
  const inner = document.createElement("div");
  inner.classList.add("fruit-inner");

  // Front face
  const front = document.createElement("div");
  front.classList.add("fruit-front");
  front.textContent = fruit.name;

  // Back face
  const back = document.createElement("div");
  back.classList.add("fruit-back");
  back.textContent = fruit.color.toUpperCase();

  // Set back face background color to fruit color
  back.style.backgroundColor = fruit.color;

  // Append faces to inner container
  inner.appendChild(front);
  inner.appendChild(back);

  // Append inner container to card
  card.appendChild(inner);

  // Add click event to flip card
  card.addEventListener("click", () => {
    toggleFlip(card);
  });

  return card; // return value
}

// Function to toggle flip class on a card
function toggleFlip(cardElement) {
  cardElement.classList.toggle("flipped");
}

// Function to highlight a single fruit card by name
function highlightFruitByName(name) {
  // local variable to hold found card
  const cards = document.querySelectorAll(".fruit-card");
  for (const card of cards) {
    const front = card.querySelector(".fruit-front");
    if (front.textContent.toLowerCase() === name.toLowerCase()) {
      card.classList.add("highlighted");
      return true; // found and highlighted
    }
  }
  return false; // not found
}

// Function to remove all highlights
function clearAllHighlights() {
  const cards = document.querySelectorAll(".fruit-card.highlighted");
  cards.forEach(card => card.classList.remove("highlighted"));
}

// Function to highlight all fruits
function highlightAllFruits() {
  const cards = document.querySelectorAll(".fruit-card");
  cards.forEach(card => card.classList.add("highlighted"));
}

// Function to create all fruit cards and add to DOM
function populateFruitList() {
  const container = document.getElementById("fruit-list");
  fruits.forEach(fruit => {
    const card = createFruitCard(fruit);
    container.appendChild(card);
  });
}

// Part 3: Combining CSS Animations with JavaScript

// Modal control functions
function showModal() {
  const modal = document.getElementById("infoModal");
  modal.classList.remove("hidden");
}

function hideModal() {
  const modal = document.getElementById("infoModal");
  modal.classList.add("hidden");
}

// Event listeners for buttons
function setupEventListeners() {
  document.getElementById("highlightAllBtn").addEventListener("click", () => {
    highlightAllFruits();
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    clearAllHighlights();
    // Also flip back all cards
    const cards = document.querySelectorAll(".fruit-card.flipped");
    cards.forEach(card => card.classList.remove("flipped"));
  });

  document.getElementById("showModalBtn").addEventListener("click", () => {
    showModal();
  });

  document.getElementById("closeModalBtn").addEventListener("click", () => {
    hideModal();
  });

  // Close modal on outside click
  document.getElementById("infoModal").addEventListener("click", (e) => {
    if (e.target.id === "infoModal") {
      hideModal();
    }
  });
}

// Initialize page
function init() {
  populateFruitList();
  setupEventListeners();
}

// Run init on DOMContentLoaded
document.addEventListener("DOMContentLoaded", init);
