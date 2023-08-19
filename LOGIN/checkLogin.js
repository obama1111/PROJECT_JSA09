import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { app } from "./Login.js";

const auth = getAuth(app)
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        localStorage.setItem("user", JSON.stringify(user))
        window.user = user;
        // ...
    } else {
        // User is signed out
        localStorage.removeItem("user")
        // ...
    }
});

if (localStorage.getItem("user")) {
    window.user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("gmail").innerHTML = `${user.email}`
}

const LogOut = document.getElementById("LogOut")
LogOut?.addEventListener("click", () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            icon: 'warning',
            title: 'Success!!',
            text: "Đăng xuất thành công",
        }).then((result) => {
            localStorage.removeItem("user")
            window.location.href = "/LOGIN/Login.html"
        });

    }).catch((error) => {
        // An error happened.
    });
});