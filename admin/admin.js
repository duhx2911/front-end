$(function () {
  loadCoponent();
});
function loadCoponent(params) {
  $(".my-navbar").load("html/header.html");
  $(".sidebar-section").load("html/sidebar.html");
  // $(".nav-search").load("html/searchnav.html");
}
function redirectProduct(params) {
  $(".product-section").load(
    "/admin/html/productAdmin.html",
    "data",
    function (response, status, request) {}
  );
}
function redirectAccount(params) {
  $(".product-section").load("/admin/html/account.html");
}
