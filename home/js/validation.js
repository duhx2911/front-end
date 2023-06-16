function addUser() {
  var fullname_val = document.getElementById("inputName").value;
  var email_val = document.getElementById("inputEmail").value;
  var pass_val = document.getElementById("inputPassword").value;
  var passConfirm_val = document.getElementById("inputPasswordConfirm").value;
  var birthday_val = document.getElementById("inputBirthday").value;
  var error_count = 0;
  if (passConfirm_val != pass_val) {
    error_count++;
    document.querySelector(".form-group .form-message").innerHTML =
      "Mật khẩu chưa chính xác";
    document.getElementById("inputPasswordConfirm").value = "";
  } else {
    document.querySelector(".form-group .form-message").innerHTML = "";
  }
  if (
    fullname_val == "" ||
    email_val == "" ||
    pass_val == "" ||
    birthday_val == ""
  ) {
    error_count++;
  }

  if (error_count == 0) {
    var user_info = {
      userName: fullname_val,
      userEmail: email_val,
      userPassword: pass_val,
      userBirthday: birthday_val,
    };
    window.localStorage.setItem("user", JSON.stringify(user_info));
    alert("Đăng ký tài khoản thành công");
    window.open("/home/page/login.html");
    window.close();
  }
}
function userLogin() {
  var user_mail = document.getElementById("inputUserMail").value;
  var user_pass = document.getElementById("inputUserPass").value;

  var user_infor = JSON.parse(window.localStorage.getItem("user"));
  if (
    user_mail == user_infor.userEmail &&
    user_pass == user_infor.userPassword
  ) {
    alert("Đăng nhập thành công");
    window.open("/home/index.html");
    window.close();
  } else {
    alert("Kiểm tra lại thông tin");
  }
}
