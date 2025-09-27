const products = [
  { id: 1, name: "Toy Car", category: "Toys", price: 500, offSale: true, Stock: 0 },
  { id: 2, name: "Doll", category: "Toys", price: 1500, offSale: true, Stock: 0 },
  { id: 3, name: "Chocolate", category: "Snacks", price: 200, offSale: true, Stock: 0 },
  { id: 4, name: "Soccer Ball", category: "Sports", price: 2500, offSale: true, Stock: 0 },
  { id: 5, name: "Puzzle", category: "Toys", price: 800, offSale: true, Stock: 0 },
  { id: 6, name: "Juice Pack", category: "Drinks", price: 300, offSale: true, Stock: 0 },
  { id: 7, name: "Chicken", category: "Food", price: 1200, offSale: true, Stock: 0 },
  { id: 8, name: "Milk Chocolate", category: "Snacks", price: 420, offSale: true, Stock: 0 },
  { id: 9, name: "Mint Chocolate", category: "Snacks", price: 350, offSale: true, Stock: 0 },
  { id: 10, name: "Vanliia Ice Cream", category: "Snacks", price: 400, offSale: true, Stock: 0 },
  { id: 11, name: "Chocolate Ice Cream", category: "Snacks", price: 415, offSale: true, Stock: 0 },
  { id: 13, name: "Strawberry Ice Cream", category: "Snacks", price: 300, offSale: true, Stock: 0 },
  { id: 14, name: "Gum", category: "Snacks", price: 50, offSale: true, Stock: 0 },
  { id: 15, name: "Lollipops", category: "Snacks", price: 125, offSale: true, Stock: 0 },
  { id: 16, name: "Basket Ball", category: "Sports", price: 1250, offSale: true, Stock: 0 },
  { id: 17, name: "Teddy Bear", category: "Toys", price: 300, offSale: true, Stock: 0 },
  { id: 18, name: "bicycle", category: "Toys", price: 158000, offSale: true, Stock: 0 },
  { id: 19, name: "Skate Board", category: "Toys", price: 300, offSale: true, Stock: 0 },
  { id: 20, name: "Foot ball", category: "Sports", price: 1350, offSale: true, Stock: 0 },
  { id: 21, name: "Apple Pack", category: "Drinks", price: 450, offSale: true, Stock: 0 },
];

let displayedProducts = [...products]
const Cart = []
let sortAsc = true

const CartItems = document.getElementById("cartitem")

function displayProducts(list) {
  const productSection = document.getElementById("productList");

  if (list.length === 0) {
    productSection.innerHTML = `<p class="empty">No products found</p>`;
    return;
  }

  productSection.innerHTML = list.map(function (product) {
    const isOffSale = product.offSale;

    return (`
      <div class="product">
        <p id="name">${product.name}</p>
        <p id="Amount&type">${product.category} • ₦${product.price}</p>

        <p id="stock">Stock: ${product.Stock}</p>
        ${isOffSale
        ? `<p id="off-sale">OFF SALE</p>`
        : `<p id="on-sale">ON SALE</p>`}

        <div>
          <button 
            id="AddtoCart" 
            onclick="AddtoCart(${product.id}, ${product.price})"  
            ${isOffSale ? "disabled" : ""}
            class="${isOffSale ? "btn-disabled" : "btn-active"}"

          >
            Add to Cart
          </button> 
          <button id="Details">Details</button>
        </div>
      </div>
    `);
  }).join("");
}

// function displayProducts(list) {
//   const productSection = document.getElementById("productList")

//   if (list.length === 0) {
//     productSection.innerHTML = `<p class="empty" >No products found</p>`
//     return
//   }

//   productSection.innerHTML = list.map(function (product) {
//     return (`<div class="product">
//       <p id="name"> ${product.name} </p>
//       <p id="Amount&type">${product.category} • ₦${product.price}</p>

//       <p id="stock">Stock: ${product.Stock}</p>
//       ${product.OffSale ? `<p id="off-sale">OFF SALE</p>` : `<p id="on-sale">ON SALE</p>`}

//       <div><button id="AddtoCart" onclick="AddtoCart(${id})" >Add to Cart</button> <button id="Details">Details</button></div>
//     </div>`)
//   }).join("")
// }

function sortByPrice() {
  displayedProducts.sort((x, y) =>
    sortAsc ? x.price - y.price : y.price - x.price
  );
  sortAsc = !sortAsc

  document.getElementById("priceSortter").textContent = `Sort By Price ${sortAsc ? "↑" : "↓"
    }`

  displayProducts(displayedProducts)
}

function sortList() {
  const SortCatories = document.getElementById("categories").value.toLowerCase()

  displayedProducts = products.filter(function (product) {
    return product.category.toLowerCase().includes(SortCatories)
  })

  if (SortCatories === "all categories") {
    return displayProducts(products)
  }

  displayProducts(displayedProducts)
}

function searchProduct() {
  const searchTerm = document.getElementById("searchBar").value.toLowerCase()

  displayedProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchTerm)
  })

  displayProducts(displayedProducts)
}

// 
function AddtoCart(id, price) {
  const productListofThings = products

  const findProductById = products.find(function (obj) {
    return obj.id == id
  })

  CartItems.innerHTML = `<il id="itemInCart"> <p id="info">${findProductById.name} • ₦${price}</p> <div id="amountofitems">  <button onclick="SubtractItemAmount()" id="SubtractAmount">-</button> <input id="amount" type="number"> <button onclick="AddItemAmount(${price}, ${id})" id="AddAmount">+</button> </div> <button id="Delete-From-Cart">Remove</button></il>`
  let amount = document.getElementById("amount")

  amount.value = 1
}
// 

// function restock () {
//   const stocked = document.getElementById("stock")

//   setTimeout(() => {
//     let randomnumber = Math.floor(Math.random() * 45)

//     stocked.text = randomnumber
//   }, 1000);
// }

// restock()

products.map(function (obj) {
  document.addEventListener("DOMContentLoaded", () => {
    function restock() {

      let randomnumber = Math.floor(Math.random() * 35);

      obj.Stock = randomnumber;

      console.log(obj)

      if (obj.Stock == 0) {
        obj.offSale = true
      } else {
        obj.offSale = false
      }

    }

    displayProducts(displayedProducts)
    restock();
    setInterval(restock, 10000);
  });

})

function SubtractItemAmount () {
  const text = document.getElementById("amount")
  let number = Number(text.value)

  text.value = number - 1

}

function AddItemAmount (price, id) {
  const text = document.getElementById("amount")

  const info = document.getElementById("info")

  let number = Number(text.value)
  text.value = number + 1

  const findProductById = products.find(function (obj) {
    return obj.id == id
  })

  text.innerText = price * number

}

function destorylessthan () {
  const text = document.getElementById("amount")
  const itemInCart = document.getElementById("itemInCart")

  let number = Number(text.value)

  if  (text.value == 0) {
      itemInCart.innerHTML = ` `
  }

  if  (text.value == -number) {
      itemInCart.innerHTML = ` `
  }

  if  (text.value == "") {
      itemInCart.innerHTML = ` `
  }
}

document.getElementById("searchBar").addEventListener("input", searchProduct)
document.getElementById("categories").addEventListener("change", sortList)
document.getElementById("amount").addEventListener("input", destorylessthan)
// document.getElementById("stock").addEventListener("change", restock)
displayProducts(products)