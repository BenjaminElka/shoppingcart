const shop = document.getElementById("shop");
const shoppingItemsButtons = document.getElementsByClassName(
  "shopping-item-button"
);
const cart = document.getElementById("cart");
const totalPriceElement = document.getElementById("totalPrice");

const handleClick = (name) => console.log(name);

const products = [
  {
    label: "Sweater",
    price: 20,
  },
  {
    label: "Jacket",
    price: 30,
  },
  {
    label: "Socks",
    price: 5,
  },
];

const shoppedItems = [];

for (const button of shoppingItemsButtons) {
  button.addEventListener("click", () => {
    // Find product title and price
    const cardBody = button.parentElement;
    const title = cardBody.getElementsByClassName("card-title")[0].innerHTML;
    let shoppedProduct = null;
    for (const prod of products) {
      if (prod.label === title) {
        shoppedProduct = prod;
        shoppedItems.push(prod);
      }
    }

    // Add to cart
    const shoppedProductElement = document.createElement("li");
    shoppedProductElement.innerHTML = `${shoppedProduct.label} ${shoppedProduct.price}$`;
    cart.appendChild(shoppedProductElement);

    // Adjust total price
    let totalPrice = 0;
    for (const shoppedProd of shoppedItems) {
      totalPrice += shoppedProd.price;
    }
    totalPriceElement.innerHTML = totalPrice;

    // Remove button
    const removeProductElement = document.createElement("button");
    removeProductElement.innerHTML = "REMOVE";
    removeProductElement.addEventListener("click", () => {
      const existingProductIndex = shoppedItems.findIndex(
        (prod) => prod.label === shoppedProduct.label
      );
      shoppedItems.splice(existingProductIndex);
      const currentTotalPrice = totalPriceElement.innerHTML;
      const newTotalPrice = Number(currentTotalPrice) - shoppedProduct.price;
      totalPriceElement.innerHTML = newTotalPrice;
    });
    cart.appendChild(removeProductElement);
  });
}

// const shoppingItems = [
//     {
//         id: 1,
//         label: 'Sweater',
//     },
//     {
//         id: 2,
//         label: 'Jacket',
//     },
//     {
//         id: 3,
//         label: 'Socks',
//     }
// ]

// const shoppingItem = (name) => {
//     return `        <div class="card shopping-item">
//     <img src="https://picsum.photos/200" class="card-img-top" />
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">Just a ${name}...</p>
//       <a id=${name} onclick="handleClick('${name}')" class="btn btn-primary shopping-item-button">Add</a>
//     </div >
//   </div>`;
// }

// const shoppingItemsButtons = document.getElementsByClassName('shopping-item-button');

// shop.innerHTML = shoppingItems.map((item) => shoppingItem(item.label))
