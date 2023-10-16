const productsAddToCart = JSON.parse(
  sessionStorage.getItem("productsAddToCart") || "[]"
);
$(function () {
  let table = document.getElementById("table-cart");

  productsAddToCart.forEach((item) => {
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let action = row.insertCell(0);
    let imageCol = row.insertCell(1);
    let productCol = row.insertCell(2);
    let priceCol = row.insertCell(3);
    let quantityCol = row.insertCell(4);
    let subTotalCol = row.insertCell(5);
    $(
      "td:nth-child(1), td:nth-child(2), td:nth-child(4),td:nth-child(5),td:nth-child(6)"
    ).css("width", "175px");

    // Add data to c1 and c2
    const numberPrice = parseFloat(item.cost.replace("$", ""));

    action.innerHTML = `<button type="button" class="btn btn-danger button-remove-prod"><i class="fa-solid fa-trash"></i></button>`;
    imageCol.innerHTML = `<img src=${item.img} alt="1">`;
    productCol.innerText = item.name;
    priceCol.innerText = item.cost;
    quantityCol.innerHTML = item.quantity;
    subTotalCol.innerText = `$${(item.quantity * numberPrice).toFixed(2)}`;
  });
});

function handleAddTocart(product) {
  const indexExist = productsAddToCart.findIndex(
    (item) => item.id === product.id
  );
  if (indexExist > -1) {
    productsAddToCart[indexExist].quantity =
      (productsAddToCart[indexExist]?.quantity || 0) + 1;
  } else {
    productsAddToCart.push({ ...product, quantity: 1 });
  }
  sessionStorage.setItem(
    "productsAddToCart",
    JSON.stringify(productsAddToCart)
  );
}

function removeProduct(product) {
  const indexExist = productsAddToCart.findIndex(
    (item) => item.id === product.id
  );
  if (indexExist > -1) {
    productsAddToCart.splice(indexExist, 1);
    document.getElementById("table-cart").deleteRow(indexExist);
    sessionStorage.setItem(
      "productsAddToCart",
      JSON.stringify(productsAddToCart)
    );
  }
}

function removeAllProduct() {
  sessionStorage.setItem("productsAddToCart", JSON.stringify([]));
}