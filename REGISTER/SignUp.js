// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGPSJjFq_ZWhq-05QzYL_TsnEQzc9qLYA",
  authDomain: "project-jsa09.firebaseapp.com",
  projectId: "project-jsa09",
  storageBucket: "project-jsa09.appspot.com",
  messagingSenderId: "216183767954",
  appId: "1:216183767954:web:617be947fae5f7a877774b",
  measurementId: "G-TRTP12GFXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm?.addEventListener("submit", function (event) {
    // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
    event.preventDefault();

    // Lấy giá trị của các input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra password và confirm password có giống nhau hay không
    if (password !== confirmPassword) {
      const destroy = document.getElementById("register-form");
      destroy.innerHTML = "";
      const createH1 = document.getElementById("text_success");
      createH1.insertAdjacentHTML("afterbegin", "<h2>Mật khẩu không khớp</h2>");
      createH1.style.color = "Red";
      createH1.style.fontWeight = "bold";

      // back lại khi sai tài khoản, mật khẩu

    }

    // Firebase signup
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        const destroy = document.getElementById("register-form")
        destroy.innerHTML = "";
        destroy.style.backgroundColor = "black";


        const createH1 = document.getElementById("text_success")
        createH1.insertAdjacentHTML("afterbegin", "<h3>Khởi tạo tài khoản thành công!!</h3>");
        createH1.style.color = "green";

        // chuyển sang login khi bấm next
        const next = document.getElementById("next_btn");
        next.style.marginTop = "1em";
        next.addEventListener("click", () => {
          window.location.href = "/LOGIN/Login.html";
        });
        next.insertAdjacentHTML("beforeend", '<button type="button">NEXT</button>');
      })
    // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const back = document.getElementById("back_btn");
      back.style.marginTop = "1em";
      back.addEventListener("click", () => {
        window.location.href = "/REGISTER/SignUp.html";
      });
      back.insertAdjacentHTML("beforeend", '<button type="button">BACK</button>');
      return
      // ..
    });
})
