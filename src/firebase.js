import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCUA3EShXk_4c_Zin4uaLgrPPLbsnlUt4",
    authDomain: "fir-tutorial-87bbc.firebaseapp.com",
    projectId: "fir-tutorial-87bbc",
    storageBucket: "fir-tutorial-87bbc.appspot.com",
    messagingSenderId: "798740509479",
    appId: "1:798740509479:web:bef42cf9a36f4cea2b6f02"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;
