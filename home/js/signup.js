$(function () {
  loadCoponent();
});
function loadCoponent(params) {
  $(".top-nav").load("/home/html/topnav.html");
  $(".signup-section").load("/home/html/signupLayout.html");
  $(".footer").load("/home/html/footer.html");
}
