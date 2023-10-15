import { products } from "../data/dummy-data.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product

$(function () {
  if (urlParams.has("id")) {
    const id = urlParams.get("id");
    product = products.find((item) => item.id == id);
    const name = product.name;
    const description = product.description;
    const cost = product.cost;
    const img = product.img

    const elName = document.getElementById("product-name");
    const elDescription = document.getElementById("product-description");
    const elCost = document.getElementById("product-cost");
    const elImg = document.getElementById("product-img");
    document.getElementById('button-add-to-cart').onclick = addToCart;

    elName.innerHTML = name;
    elCost.innerHTML = cost;
    elDescription.innerHTML = description;
    elImg.setAttribute('src', img)
  }
});

function addToCart() {
    handleAddTocart(product)
}
