const productsAddToCart = JSON.parse(
  sessionStorage.getItem("productsAddToCart") || "[]"
);
$(function () {
  let table = document.getElementById("table-cart");

  productsAddToCart.forEach((item, index) => {
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

    action.innerHTML = `<button type="button" class="btn btn-danger button-remove-prod" id="btn-remove-${index + 1}"><i class="fa-solid fa-trash"></i></button>`;
    // const button = document.createElement("button");
    // button.type = "button";
    // button.classList.add("btn", "btn-danger", "button-remove-prod");

    // const icon = document.createElement("i");
    // icon.classList.add("fa-solid", "fa-trash");

    // button.onclick = () => removeProduct(item);
    // button.appendChild(icon);

    // action.appendChild(button);
    const elBtn = document.getElementById(`btn-remove-${index + 1}`);
    elBtn.onclick = () => removeProduct(item);

    imageCol.innerHTML = `<img src=${item.img1} alt="1">`;
    productCol.innerText = item.name;
    priceCol.innerText = item.cost;
    quantityCol.innerHTML = item.quantity;
    subTotalCol.innerText = `$${(item.quantity * numberPrice).toFixed(2)}`;
  });
  calculateTotal();
  document.getElementById("button-remove-all").onclick = removeAllProduct;
});

function calculateTotal() {
  const subTotal = productsAddToCart.reduce((acc, item) => {
    const numberPrice = parseFloat(item.cost.replace("$", ""));
    return acc + numberPrice * item.quantity;
  }, 0);
  const feeShip = 0;
  const total = subTotal + feeShip;
  document.getElementById("subtotal-cart").innerText = `$${subTotal.toFixed(
    2
  )}`;
  document.getElementById("total-cart").innerText = `$${total.toFixed(2)}`;
}

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
    document.getElementById("table-cart").deleteRow(indexExist + 1);
    sessionStorage.setItem(
      "productsAddToCart",
      JSON.stringify({ productsAddToCart })
    );
  }
}
