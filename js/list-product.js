import { products } from "../data/dummy-data.js";

$(function () {
  nextTo(1);
});

let offset = 0;
const numberOfPage = 15;

function nextTo(index) {
  const result = products.slice(offset, index * numberOfPage);
  offset = result.length;

  document.getElementById("product-items").innerHTML = result
    .map(
      (item, index) =>
        `<div class="col-xl-3 col-lg-4 col-md-6" style="margin-top: 24px">
        <a href="#" style="text-decoration:none" >
            <div class="card" style="width: 18rem;">
                <img src=${item.img} class="card-img-top img-product-item" alt="...">
                <div class="card-body">
                    <h5 class="card-title title">${item.name}</h5>
                    <p class="card-text description">${item.description}</p>
                    <p class="card-text">${item.cost}</p>
                    <button type="button" class="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </a> 
    </div>`
    )
    .join("");
}
