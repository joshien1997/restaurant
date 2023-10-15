import { products } from "../data/dummy-data.js";

const numberElOfPage = 15;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let data;
$(function () {
  let currentPage = 1;
  let type = 1;
  if (urlParams.has("page")) {
    currentPage = +urlParams.get("page");
  }
  if (urlParams.has("type")) {
    type = +urlParams.get("type");
  }
  data = products.filter((item) => item.type == type);
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
                <img src=${item.img} class="card-img-top img-product-item" alt="...">
              </a>
              <div class="card-body">
                <a href="product-detail.html?id=${item.id}" style="text-decoration:none; color: inherit;">
                    <h5 class="card-title title">${item.name}</h5>
                    <p class="card-text description">${item.description}</p>
                </a>
                <p class="card-text">${item.cost}</p>
                <button type="button" class="btn btn-success" style="border-radius: 4px; background-color: #0b8a00;">Add to Cart</button>
              </div>
            </div>
    </div>`
    )
    .join("");
}
