// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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
  appId: "1:216183767954:web:be1bcd91d54ae44e77774b",
  measurementId: "G-JCKRD2ZFME"
};

function convertError(code) {
  switch (code) {
    case "auth/wrong-password":
      return "Sai mật khẩu"
      break;

    case "auth/user-not-found":
      return "Tài khoản không tồn tại";
      break;

    default:
      return "Đã có lỗi xảy ra"
  }
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm?.addEventListener("submit", function (event) {
    // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
    event.preventDefault();

    // Lấy giá trị của các input
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire({
          icon: 'success',
          title: 'Success!!',
          text: "Đăng nhập thành công",
        }).then((result) => {
          window.location.href = "/MAIN/Main.html"
        });
        // localStorage.setItem("isLogin", true);
        // const destroy = document.getElementById("login-form");
        // destroy.innerHTML = "";
        // const createH1 = document.getElementById("text_success");
        // createH1.insertAdjacentHTML("afterbegin", "<h3>Đăng nhập thành công</h3>");
        // createH1.style.color = "Green";
        // const next = document.getElementById("next_btn");
        // next.style.marginTop = "1em";
        // next.addEventListener("click", () => {
        //   window.location.href = "/MAIN/Main.html";
        // });
        // next.insertAdjacentHTML("beforeend", '<button type="button">NEXT</button>');
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: convertError(errorCode),
        });
        return;
        // back lại khi sai tài khoản, mật khẩu
        //   const destroy = document.getElementById("login-form");
        //   destroy.innerHTML = "";
        //   const createH1 = document.getElementById("text_success");
        //   createH1.insertAdjacentHTML("afterbegin", "<h3>Tài khoản không tồn tại</h3>");
        //   createH1.style.color = "red"

        //   const gap = document.getElementById("gap-btn")
        //   gap.style.display = "flex";
        //   gap.style.justifyContent = "space-between"
        //   const back = document.getElementById("back_btn");
        //   back.style.marginTop = "1em";
        //   back.addEventListener("click", () => {
        //     window.location.href = "/LOGIN/Login.html";
        //   });
        //   back.insertAdjacentHTML("afterbegin", '<button type="button">Thử lại</button>');

        //   const next = document.getElementById("next_btn");
        //   next.style.marginTop = "1em";
        //   next.addEventListener("click", () => {
        //     window.location.href = "/REGISTER/SignUp.html";
        //   });
        //   next.insertAdjacentHTML("beforeend", '<button type="button">Đăng ký</button>');
        //   return;
        // });
      })
  })
})