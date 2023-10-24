$(".btn").click(function () {
  $(".input").val("");
});

$(function () {
  document.getElementById("button-remove-all").onclick = removeAllProduct;
});

function showAlert() {
  var message = "Thanks you for shopping";
  alert(message);
  removeAllProduct()
}

function removeAllProduct() {
  sessionStorage.setItem("productsAddToCart", JSON.stringify([]));
}
