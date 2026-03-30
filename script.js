import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
            
            // Firestore
            import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
            import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
          
            // Your web app's Firebase configuration
            const firebaseConfig = {
            apiKey: "AIzaSyDeik9aER9YvsxLMbEgaFd8efhn2i8KqTw",
            authDomain: "psm-2026-03-30.firebaseapp.com",
            projectId: "psm-2026-03-30",
            storageBucket: "psm-2026-03-30.firebasestorage.app",
            messagingSenderId: "632175564728",
            appId: "1:632175564728:web:7f23c3046fe9a6146f614d"
           };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);

            // Initialize Cloud Firestore and get a reference to the service
            const db = getFirestore(app);

            // Read data
            const querySnapshot = await getDocs(collection(db, "products"));

            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                console.log(doc.data()['brand'],doc.data()['model']);
            });