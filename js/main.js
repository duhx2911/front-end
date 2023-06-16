// Drop menu
$(document).ready(function () {
  $(".cate-menu .service-item").hover(
    function () {
      $(this).find(".child-menu").slideDown(50);
    },
    function () {
      $(this).find(".child-menu").hide(50);
    }
  );
});
$(document).ready(function () {
  $(".top-link .user-item").hover(
    function () {
      $(this).find(".acc-option").slideDown(50);
    },
    function () {
      $(this).find(".acc-option").hide(50);
    }
  );
});
