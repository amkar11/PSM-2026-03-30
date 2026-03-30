// Import the 'db' instance from your Firebase initialization file
import { db } from './firebase-init.js';

// Import Firestore functions
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.X.X/firebase-firestore.js'; // Make sure version matches your firebase-init.js

const productsData = [
  {
    brand: "Fender",
    model: "Stratocaster",
    instrument_type: "Electric Guitar",
    image_link: "https://r2.gear4music.com/media/86/864777/600/preview.jpg",
    quantity: 5,
    cost: 4500.00
  },
  {
    brand: "Yamaha",
    model: "PSR-E373",
    instrument_type: "Keyboard",
    image_link: "https://m.media-amazon.com/images/I/61SfBFcsdEL._AC_UF1000,1000_QL80_.jpg",
    quantity: 12,
    cost: 1200.00
  },
  {
    brand: "Meinl",
    model: "HCS",
    instrument_type: "Drum Cymbals",
    image_link: "https://r2.gear4music.com/media/53/537921/600/preview.jpg",
    quantity: 3,
    cost: 850.00
  },
  {
    brand: "D'Addario",
    model: "EJ16",
    instrument_type: "Acoustic Guitar Strings",
    image_link: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_10/104609/11949651_800.jpg",
    quantity: 50,
    cost: 35.00
  },
  {
    brand: "Yamaha",
    model: "Clarinet YCL-255",
    instrument_type: "Woodwind",
    image_link: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_27/279396/14715751_800.jpg",
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
