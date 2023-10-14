import { products } from "../data/dummy-data.js";

$(function () {
  const itemsSale = products.slice(0, 12) 
  const newItems = [];
  const numberItemOfEachPage = 4;
  for (let i = 0; i < itemsSale.length; i += numberItemOfEachPage) {
    const page = itemsSale.slice(i, i + numberItemOfEachPage);
    newItems.push(page);
  }
  
  document.getElementById("item-sale").innerHTML = newItems
    .map(
      (group, index) =>
        `<div class="carousel-item ${index === 0 && "active"}">
        <div class="container text-center">
            <div class="row align-items-start">
                ${group.map(
                  (item) => `
                 <div class="col">
                     <div class="card">
                         <img src=${item.img}
                             class="card-img-top img-product-item" alt="...">
                         <div class="card-body">
                             <h5 class="card-title title">${item.name}</h5>
                             <p class="card-text description">${item.description}</p>
                         </div>
                     </div>
                 </div>`
                )}
            </div>
        </div>
    </div>`
    )
    .join("");
});
