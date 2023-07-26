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
      createH1.insertAdjacentHTML("afterbegin", "<h3>Tài khoản không tồn tại</h3>");
      createH1.style.color = "red"

      const gap = document.getElementById("gap-btn")
      gap.style.display = "flex";
      gap.style.justifyContent = "space-between"
      const back = document.getElementById("back_btn");
      back.style.marginTop = "1em";
      back.addEventListener("click", () => {
        window.location.href = "/LOGIN/Login.html";
      });
      back.insertAdjacentHTML("afterbegin", '<button type="button">Thử lại</button>');

      const next = document.getElementById("next_btn");
      next.style.marginTop = "1em";
      next.addEventListener("click", () => {
        window.location.href = "/REGISTER/SignUp.html";
      });
      next.insertAdjacentHTML("beforeend", '<button type="button">Đăng ký</button>');
      return;
    }

    // Thông báo đăng nhập thành công và lưu thông tin đăng nhập vào Local Storage
    localStorage.setItem("isLogin", true);
    const destroy = document.getElementById("login-form");
    destroy.innerHTML = "";
    const createH1 = document.getElementById("text_success");
    createH1.insertAdjacentHTML("afterbegin", "<h3>Đăng nhập thành công</h3>");
    createH1.style.color = "Green";
    const next = document.getElementById("next_btn");
    next.style.marginTop = "1em";
    next.addEventListener("click", () => {
      window.location.href = "/MAIN/Main.html";
    });
    next.insertAdjacentHTML("beforeend", '<button type="button">NEXT</button>');
  });
});