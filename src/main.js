window.profile = function () {
    alert("Chưa đăng nhập");
    login();
}
window.login = function () {
    document.getElementById("app").innerHTML = `
    <div class="min-h-screen flex justify-center items-center ">
        <div class="wrapper w-md text-white bg-gray-600 wrapper rounded-[10px] ">
          <form action="" id="LoginForm">
            <h1 class="text-4xl text-center">Login</h1>
            <div class="input-box w-full h-[50px] my-8 relative ">
              <input type="text" id="email" placeholder="Email" class="w-full h-full bg-transparent rounded-[40px]  "
                required>
              <box-icon type='solid' name='user' class="absolute right-[20px]"></box-icon>
            </div>
            <div class="input-box w-full h-[50px] my-8 relative">
              <input type="password" id="password" placeholder="Password"
                class="w-full h-full bg-transparent rounded-[40px] " required>
              <box-icon name='lock-alt' type='solid' class="absolute right-[20px]"></box-icon>
            </div>
            <div class="remember-forgot flex justify-between items-center">
              <label><input type="checkbox"> Remember Me</label>
              <a href="#">Forgot password</a>
            </div>
            <button type="submit"
              class="btn w-full h-[45px] bg-white rounded-[40px] cursor-pointer font-semibold text-base text-black">
              Login </button>
          </form>
          <p id="error-message" class="error"></p>
        </div>
      </div>`;

    document.getElementById("LoginForm").addEventListener("submit", async function (e) {
        e.preventDefault();// ngăn trang reload;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");
        const data = {
            email,
            password
        }

        try {
            const response = await fetch("https://auth-wit.vercel.app/auth/login", {
                method: "POST",
                Headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            const Data = await response.json(); //trả về dữ liệu dạng json
            if (response.ok) {
                alert("Đăng nhập thành công");
                window.location.href = "home.html";
            }
            else {
                errorMessage.textContent = Data.message || "Đăng nhập thất bại";
            }
        }
        catch (error) {
            errorMessage.textContent = "Không thể kết nối đến server";
            window.location.href = "home.html";
        }
    })
}



