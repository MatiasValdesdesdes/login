import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlnIz6PM_nme5pNoNmsfp9xk6w90dg4m8",
  authDomain: "login-8d243.firebaseapp.com",
  projectId: "login-8d243",
  storageBucket: "login-8d243.firebasestorage.app",
  messagingSenderId: "130091778530",
  appId: "1:130091778530:web:170ce8ae9cff2edd16f9bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
