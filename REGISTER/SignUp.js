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
const auth = getAuth(app);

function convertError(code) {
  switch (code) {
    case "auth/weak-password":
      return "Mật khẩu phải có tối thiểu 6 ký tự"
      break;

    case "auth/email-already-in-use":
      return "Email đã được sử dụng";
      break;

    default:
      return "Đã có lỗi xảy ra"
  }
}

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Mật khẩu không khớp",
      });
      return;
      // back lại khi sai tài khoản, mật khẩu

    }

    // Firebase signup
    createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire({
          icon: 'success',
          title: 'Success!!',
          text: "Đăng Kí thành công",
        }).then((result) => {
          window.location.href = "/LOGIN/Login.html"
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: convertError(errorCode),
        });
        // const back = document.getElementById("back_btn");
        // back.style.marginTop = "1em";
        // back.addEventListener("click", () => {
        //   window.location.href = "/REGISTER/SignUp.html";
        // });
        // back.insertAdjacentHTML("beforeend", '<button type="button">BACK</button>');
        // return
        // ..
      });
    // ...
  })

})
