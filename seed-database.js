// Import the 'db' instance from your Firebase initialization file
import { db } from './firebase-init.js';

// Import Firestore functions
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.X.X/firebase-firestore.js'; // Make sure version matches your firebase-init.js

const productsData = [
  {
    name: "Fender Stratocaster",
    type: "Electric Guitar",
    quantity: 5,
    cost: 4500.00
  },
  {
    name: "Yamaha PSR-E373",
    type: "Keyboard",
    quantity: 12,
    cost: 1200.00
  },
  {
    name: "Meinl HCS Cymbal Set",
    type: "Drum Cymbals",
    quantity: 3,
    cost: 850.00
  },
  {
    name: "D'Addario EJ16",
    type: "Acoustic Guitar Strings",
    quantity: 50,
    cost: 35.00
  },
  {
    name: "Clarinet YCL-255",
    type: "Woodwind",
    quantity: 2,
    cost: 3200.00
  }
];

async function seedProducts() {
  try {
    for (const product of productsData) {
      // Get a reference to the 'products' collection
      const productsCollectionRef = collection(db, "products");

      // Add a new document with a generated ID
      const docRef = await addDoc(productsCollectionRef, product);
      console.log("Document written with ID: ", docRef.id, " for product:", product.name);
    }
    console.log("All products seeded successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Call the function to start seeding the database
seedProducts();
