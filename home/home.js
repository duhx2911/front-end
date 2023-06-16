$(function () {
  loadCoponent();
  setTimeout(() => {
    addListProduct();
  }, 200);
});
function loadCoponent(params) {
  $(".top-nav").load("html/topnav.html");

  $(".banner").load("html/banner.html");
  $(".topic-block").load("html/topic.html");
  $(".product-section").load("html/product.html");
  $(".banner-bottom").load("html/bannerBottom.html");
  $(".new").load("html/news.html");
  $(".newletter").load("html/newletter.html");
  $(".footer").load("html/footer.html");
}
function addListProduct(params) {
  var categories = ["Iphone", "Ipad", "Mac", "Watch", "Âm Thanh", "Phụ kiện"];
  var iPhone = [
    {
      productname: "iPhone 14 Pro Max 128GB",
      crr_price: "26.790.000",
      old_price: "34.990.000",
      tag: "khai-truong.png",
      img_link: "iphone-14-pro-max-128gb.png",
    },
    {
      productname: "iPhone 14 Pro 128GB",
      crr_price: "24.990.000",
      old_price: "30.990.000",
      tag: "khai-truong.png",
      img_link: "iphone-14-pro-128gb.png",
    },
    {
      productname: "iPhone 14 128GB",
      crr_price: "18.990.000",
      old_price: "24.990.000",
      tag: "khai-truong.png",
      img_link: "iphone-14-128gb.png",
    },
    {
      productname: "iPhone 14 Plus 128GB",
      crr_price: "21.590.000",
      old_price: "27.990.000",
      tag: "khai-truong.png",
      img_link: "iphone-14-plus-128gb.png",
    },
  ];

  for (var j = 0; j < categories.length; j++) {
    $(".product-section").append(
      `
        <div class="product-block">
      <div class="product-list">
          <h2 class="block-title Product-title">${categories[j]}</h2>
          <div class="product-list-item">
              <div class="row ProductList">

              </div>
          </div>
          <div class="show-all ">
              <a class="Product-btn" href="#">
                  Xem tất cả ${categories[j]}
                  <i class="fa-solid fa-chevron-right"></i>
              </a>
          </div>
      </div>
  </div>`
    );
  }
  for (var i = 0; i < iPhone.length; i++) {
    $(".ProductList").append(`
        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                        <div class="card-item">
                            <div class="product-tag">
                                <img src="/img/khai-truong.png" alt="">
                            </div>
                            <div class="product-img">
                                <a href="#">
                                    <img src="/img/Iphone/${iPhone[i].img_link}" alt="iPhone 14 Pro Max 128GB img">
                                </a>
                            </div>
                            <div class="product-detail">
                                <p class="product-name">
                                    <a href="#">
                                    ${iPhone[i].productname}
                                    </a>
                                </p>
                                <div class="product-price">
                                    <p class="current-price">${iPhone[i].crr_price}₫</p>
                                    <del class="old-price">${iPhone[i].old_price}₫</del>
                                </div>
                            </div>
                        </div>
                    </div>`);
  }
}
