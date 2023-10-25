import { products } from "../data/dummy-data.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product;

$(function () {
  if (urlParams.has("id")) {
    const id = urlParams.get("id");
    product = products.find((item) => item.id == id);
    const name = product.name;
    const description = product.description;
    const imgs = [];
    const cost = product.cost;
    const arr = Array.from(Array(5).keys());

    for (const i of arr) {
      if (product[`img${i + 1}`]) {
        imgs.push(product[`img${i + 1}`]);
      }
    }

    const elName = document.getElementById("product-name");
    const elDescription = document.getElementById("product-description");
    const elCost = document.getElementById("product-cost");
    const elImgAvatar = document.getElementById("product-img");

    const elImgs = document.getElementById("product-imgs");
    elImgs.outerHTML = imgs
      .map(
        (item, index) =>
          `<li class="active"><button data-target="#pic-1" data-toggle="tab" style="padding: 0;
          border: none;
          background: none;"><img id="product-img-${
            index + 1
          }" src=${item} alt="Product" /></button></li>`
      )
      .join("");

    imgs.forEach((img, index) => {
      const elImg = document.getElementById(`product-img-${index + 1}`);
      elImg.setAttribute("src", img);
      elImg.onclick = () => setProductAvatar(img);
    });

    document.getElementById("button-add-to-cart").onclick = addToCart;

    elName.innerHTML = name;
    elCost.innerHTML = cost;
    elDescription.innerHTML = description;
    elImgAvatar.setAttribute("src", imgs[0]);
  }
});

function addToCart() {
  handleAddTocart(product);
}

function setProductAvatar(img) {
  const elImgAvatar = document.getElementById("product-img");
  elImgAvatar.setAttribute("src", img);
}
