$(function () {
  loadCoponent();
});
function loadCoponent(params) {
  $(".top-nav").load("/home/html/topnav.html");
  $(".login-section").load("/home/html/loginLayout.html");
  $(".footer").load("/home/html/footer.html");
}
