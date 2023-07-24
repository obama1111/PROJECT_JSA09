document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    loginForm?.addEventListener("submit", function (event) {
      // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
      event.preventDefault();
  
      // Lấy giá trị của các input
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Lấy thông tin đăng ký từ Local Storage
      const registeredUsername = localStorage.getItem("username");
      const registeredPassword = localStorage.getItem("password");
  
      // Kiểm tra username và password có khớp với thông tin đăng ký hay không
      if (username !== registeredUsername || password !== registeredPassword) {
        const destroy = document.getElementById("login-form");
        destroy.innerHTML = "";
        const createH1 = document.getElementById("text_success");
        createH1.insertAdjacentHTML("afterbegin","<h2>Tài khoản không đúng</h2>");
        createH1.style.color = "Red";
        return;
      }
  
      // Thông báo đăng nhập thành công và lưu thông tin đăng nhập vào Local Storage
      localStorage.setItem("isLogin", true);
      const destroy = document.getElementById("login-form");
      destroy.innerHTML = "";
      const createH1 = document.getElementById("text_success");
      createH1.insertAdjacentHTML("afterbegin","<h2>Đăng nhập thành công</h2>");
      createH1.style.color = "Green";
      window.location.href = "/MAIN/Main.html";
    });
  });