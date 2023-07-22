
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm?.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const registeredUsername = localStorage.getItem("username");
        const registeredPassword = localStorage.getItem("password");

        if (username !== registeredUsername || password !== registeredPassword) {
            alert("Thông tin đăng nhập không chính xác");
            return;
        }

        localStorage.setItem("isLogin", true);
        alert("Đăng nhập thành công")
        window.location.href="home.html"
    });
});
