document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm?.addEventListener("submit", function (event) {
    // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
    event.preventDefault();

    // Lấy giá trị của các input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
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
      const back = document.getElementById("back_btn");
      back.style.marginTop = "1em";
      back.addEventListener("click", () => {
        window.location.href = "/REGISTER/SignUp.html";
      });
      back.insertAdjacentHTML("beforeend", '<button type="button">BACK</button>');
      return
    }

    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
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
});
