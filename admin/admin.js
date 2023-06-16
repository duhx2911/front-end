let listProduct = [];
let getListPro = [];
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
    function (response, status, request) {
      showProduct();
    }
  );
}
function redirectAccount(params) {
  $(".product-section").load("/admin/html/account.html");
}

function addProduct() {
  if (window.localStorage.getItem("listSP")) {
    listProduct = JSON.parse(window.localStorage.getItem("listSP"));
  }
  let id_val = document.getElementById("inputId").value;
  let name_val = document.getElementById("inputName").value;
  let crrPrice_val = document.getElementById("inputCurrentPrice").value;
  let oldPrice_val = document.getElementById("inputOldPrice").value;
  let img_val = document.getElementById("inputImage").value;
  let cate_val = document.getElementById("selectCate").value;

  const productObj = {
    id: id_val,
    productName: name_val,
    crrPrice: crrPrice_val,
    oldPrice_val: oldPrice_val,
    image: img_val,
    category: cate_val,
  };

  listProduct.push(productObj);
  window.localStorage.setItem("listSP", JSON.stringify(listProduct));
  resetModal();
  showProduct();
}

const resetModal = () => {
  document.getElementById("inputId").value = "";
  document.getElementById("inputName").value = "";
  document.getElementById("inputCurrentPrice").value = "";
  document.getElementById("inputOldPrice").value = "";
  document.getElementById("inputImage").value = "";
  document.getElementById("selectCate").value = "";
};
const showProduct = () => {
  if (window.localStorage.getItem("listSP")) {
    getListPro = JSON.parse(window.localStorage.getItem("listSP"));
  }
  $(".list-product-data").empty();
  for (let i = 0; i < getListPro.length; i++) {
    $(".list-product-data").append(`<tr class="data-product-item">
    <th scope="row">${getListPro[i].id}</th>
    <td>${getListPro[i].productName}</td>
    <td>${getListPro[i].crrPrice}</td>
    <td>${getListPro[i].oldPrice}</td>
    <td>${getListPro[i].image}</td>
    <td>${getListPro[i].category}</td>
    <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal" onclick="openEditProduct(${getListPro[i].id})">Edit</button></td>
    <td><button type="button" class="btn btn-danger" onclick= "deleteProduct(${getListPro[i].id})">Delete</button></td>
</tr>
    `);
  }
};
