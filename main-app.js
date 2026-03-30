// main-app.js

// Import the 'db' instance from your Firebase initialization file
import { db } from './script.js';

// Import Firestore functions
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.X.X/firebase-firestore.js'; // Ensure version matches your firebase-init.js

async function fetchAndDisplayProducts() {
  try {
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol); // Get all documents from the 'products' collection

    const productsGridContainer = document.querySelector('.grid-container'); // Select by class name now

    if (productsGridContainer) {
      // Clear any existing content
      productsGridContainer.innerHTML = '';

      productSnapshot.forEach(doc => {
        const productData = doc.data();
        // No need for productId for this display, but useful for other operations

        // Create the outer product div
        const productDiv = document.createElement('div');
        productDiv.className = 'product'; // Add the 'product' class

        productDiv.innerHTML = `
          <img src="${productData.image_link}" alt="${productData.brand} ${productData.model}" class="product-image">
          <div class="general-info">
            <p class="instrument-type">${productData.instrument_type}</p>
            <p class="brand">${productData.brand}</p>
            <p class="model">${productData.model}</p>
            <p class="cost">Cena: ${productData.cost.toFixed(2)} PLN</p>
            <p class="quantity">Ilość: ${productData.quantity}</p>
          </div>
          <button>Add to cart</button>
        `;
        productsGridContainer.appendChild(productDiv);
      });
    } else {
      console.error("Element with class 'grid-container' not found in the HTML.");
    }

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Call the function to fetch and display products when the page loads
fetchAndDisplayProducts();
