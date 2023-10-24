import { products } from "../data/dummy-data.js";

const numberElOfPage = 15;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let data;
$(function () {
  let currentPage = 1;
  let type;
  if (urlParams.has("page")) {
    currentPage = +urlParams.get("page");
  }
  if (urlParams.has("type")) {
    type = +urlParams.get("type");
  }
  data = !!type ? products.filter((item) => item.type == type) : products;
  nextTo(currentPage);
  const numberOfPage = Math.ceil(data.length / numberElOfPage);
  const arr = Array.from(Array(numberOfPage).keys());

  const pageItemView = document.getElementById("page-item-view");
  pageItemView.outerHTML = arr
    .map((item) => {
      const pageNumber = item + 1;
      return `<li class="page-item"><a class="page-link page-item-number" href="list-product.html?type=${type}&page=${pageNumber}">${pageNumber}
          </button></li>`;
    })
    .join("");
});

function nextTo(pageNumber) {
  const result = data.slice(
    (pageNumber - 1) * numberElOfPage,
    pageNumber * numberElOfPage
  );

  document.getElementById("product-items").innerHTML = result
    .map(
      (item, index) =>
        `<div class="col-xl-3 col-lg-4 col-md-6" style="margin-top: 24px">
            <div class="card" style="width: 18rem;">
              <a href="product-detail.html?id=${item.id}" style="text-decoration:none">
                <img src=${item.img1} class="card-img-top img-product-item" alt="...">
              </a>
              <div class="card-body">
                <a href="product-detail.html?id=${item.id}" style="text-decoration:none; color: inherit;">
                    <h5 class="card-title title">${item.name}</h5>
                    <p class="card-text description">${item.description}</p>
                </a>
                <h6 class="card-text" style="margin-top: 16px">${item.cost}</h6>
                <button type="button" class="btn btn-success button-add-to-cart" style="border-radius: 4px; background-color: #0b8a00;" onclick="addToCart(${JSON.stringify(item)})">Add to Cart</button>
              </div>
            </div>
    </div>`
    )
    .join("");

  document.addEventListener("click", (e) => {
  });
}

function addToCart(item) {
  console.log('addToCart', item);
  // handleAddTocart(item);
}
