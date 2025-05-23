import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTw79BA_v7vAPGZoLXHUJfbCK8KneM3pI",
  authDomain: "dinnoo-club.firebaseapp.com",
  projectId: "dinnoo-club",
  storageBucket: "dinnoo-club.firebasestorage.app",
  messagingSenderId: "394748503119",
  appId: "1:394748503119:web:01b61e42941fb5bf02b63a",
  measurementId: "G-R8ZC2LDKXK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "Login sukses! Selamat datang, " + userCredential.user.email;
      setTimeout(() => location.href = "dashboard.html", 1000);
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Gagal login: " + error.message;
    });
};

window.register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("reg-username").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(userCredential.user, { displayName: username }).then(() => {
        document.getElementById("status").innerText = "Registrasi sukses. Selamat datang, " + username;
        setTimeout(() => location.href = "profile.html", 1000);
      });
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Gagal daftar: " + error.message;
    });
};

window.loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      document.getElementById("status").innerText = "Login Google sukses! Selamat datang, " + result.user.displayName;
      setTimeout(() => location.href = "profile.html", 1000);
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Gagal login Google: " + error.message;
    });
};
