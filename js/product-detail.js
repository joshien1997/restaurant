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
    const img1 = product.img
    const img2 = product.img
    const img3 = product.img
    const img4 = product.img
    const img5 = product.img

    const elName = document.getElementById("product-name");
    const elDescription = document.getElementById("product-description");
    const elCost = document.getElementById("product-cost");
    const elImg1 = document.getElementById("product-img-1");
    const elImg2 = document.getElementById("product-img-2");
    const elImg3 = document.getElementById("product-img-3");
    const elImg4 = document.getElementById("product-img-4");
    const elImg5 = document.getElementById("product-img-5");
    document.getElementById('button-add-to-cart').onclick = addToCart;

    elName.innerHTML = name;
    elCost.innerHTML = cost;
    elDescription.innerHTML = description;
    elImg1.setAttribute('src', img1)
    elImg2.setAttribute('src', img2)
    elImg3.setAttribute('src', img3)
    elImg4.setAttribute('src', img4)
    elImg5.setAttribute('src', img5)
  }
});

function addToCart() {
    handleAddTocart(product)
}
