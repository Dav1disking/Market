const products = [
  { id: 1, name: "Toy Car", category: "Toys", price: 500, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 2, name: "Doll", category: "Toys", price: 1500, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 3, name: "Chocolate", category: "Snacks", price: 200, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 4, name: "Soccer Ball", category: "Sports", price: 2500, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 5, name: "Puzzle", category: "Toys", price: 800, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 6, name: "Juice Pack", category: "Drinks", price: 300, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 7, name: "Chicken", category: "Food", price: 1200, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 8, name: "Milk Chocolate", category: "Snacks", price: 420, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 9, name: "Mint Chocolate", category: "Snacks", price: 350, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 10, name: "Vanliia Ice Cream", category: "Snacks", price: 400, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 11, name: "Chocolate Ice Cream", category: "Snacks", price: 415, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 13, name: "Strawberry Ice Cream", category: "Snacks", price: 300, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 14, name: "Gum", category: "Snacks", price: 50, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 15, name: "Lollipops", category: "Snacks", price: 125, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 16, name: "Basket Ball", category: "Sports", price: 1250, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 17, name: "Teddy Bear", category: "Toys", price: 300, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 18, name: "bicycle", category: "Toys", price: 158000, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 19, name: "Skate Board", category: "Toys", price: 300, offSale: true, Stock: 0, added: false, amount: 0 },
  { id: 20, name: "Foot ball", category: "Sports", price: 1350, offSale: true, Stock: 0, added: false, amount: 0},
  { id: 21, name: "Apple Pack", category: "Drinks", price: 450, offSale: true, Stock: 0, added: false, amount: 0},
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
        
         ${product.added //tells if this is added
        ? `<p id="added-cart">Added to your cart</p>`
        : `<p id="on-sale"> </p>`}

        <div>
          <button 
            id="AddtoCart" 
            onclick="AddtoCart(${product.id}, ${product.price})"  
            ${isOffSale ? "disabled" : ""}
            class="${isOffSale ? "btn-disabled" : "btn-active"}"
            class="${product.added ? "AddedtoCart" : "btn-active"}"> 

            ${product.added ? "Added" : "Add to Cart"}            
          </button> 
          <button id="Details">Details</button>
        </div>
      </div>
    `);
  }).join("");
}

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
  const cartinfo = document.getElementById("AddtoCart")

  const findProductById = products.find(function (obj) {
    return obj.id == id
  })

  CartItems.innerHTML += `<il id="item-${findProductById.id}" class="itemInCart"> <p id="info-${findProductById.id}">${findProductById.name} • ₦${price}</p> <div id="amountofitems">  <button onclick="SubtractItemAmount(${price}, ${id})" id="SubtractAmount">-</button> <input id="amount-${findProductById.id}" type="number"> <button onclick="AddItemAmount(${price}, ${id})" id="AddAmount">+</button> </div> <button id="Delete-From-Cart" onclick="RemoveItem(${id})">Remove</button></il>`
  const amount = document.getElementById("amount-" + findProductById.id)

  findProductById.amount = 1

  amount.value = findProductById.amount

  findProductById.added = true
  displayProducts(displayedProducts)
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

//////////////////////////////////////////////////////////////////

function Notify(auth, time, gui) {
  document.getElementById("placement").innerHTML += `<div id="notification" class="${auth}" onclick="selfdestory()"> <p id="notificationMessage">Hello there you have gotten a message</p> </div>`
  document.getElementById("placement").innerHTML += gui

  setTimeout(() => {
    console.log("logged")
    const notify = document.getElementById("notification")

    if (notify.className = `clearcart`) {
      console.log("verified")
      const clearcartbtn = document.getElementById("clearcart")
      clearcartbtn.outerHTML = `<button id="clearcart" class="clickable" onclick="clearallitems()" >Clear</button>`
    }

    notify.outerHTML = ``
    gui.outerHTML = ``
  }, time);
}

/////////////////////////////////////////////////////////////////

products.map(function (obj) {
  document.addEventListener("DOMContentLoaded", () => {
    function restock() {

      let randomnumber = Math.floor(Math.random() * 50);

      obj.Stock = randomnumber;

    if (obj.added == true) {
      return
    } else {
        if (obj.Stock == 0) {
        obj.offSale = true
      } else {
        obj.offSale = false
      }
    }

    }

    displayProducts(displayedProducts)
    restock();
    setInterval(restock, 10000);
  });

})

function SubtractItemAmount (price, id) {
  const text = document.getElementById("amount-" + id)
  const info = document.getElementById("info-" + id)

  let number = Number(text.value)
  text.value = number - 1

  const findProductById = products.find(function (obj) {
    return obj.id == id

  })

  findProductById.amount = text.value * findProductById.price
  info.innerText = findProductById.name + " • ₦" + findProductById.amount
}

/////////////////////////////////////////////////////////////////////////

function AddItemAmount (price, id) {
  const text = document.getElementById("amount-" + id)
  const info = document.getElementById("info-" + id)

  let number = Number(text.value)
  text.value = number + 1

  const findProductById = products.find(function (obj) {
    return obj.id == id
    
  })

  findProductById.amount = text.value * findProductById.price

  info.innerText = findProductById.name + " • ₦" + findProductById.amount
}

//////////////////////////////////////////////////////////////////////////

function RemoveItem(id) {
   const findProductById = products.find(function (obj) {
    return obj.id == id
  })

  const itembyid = document.getElementById("item-" + id)
  findProductById.added = false

  itembyid.outerHTML = ``
  displayProducts(displayedProducts)
}

/////////////////////////////////////////////////////////////////////////

function clearallitems() {
  console.log("input")

  const carthtml = document.getElementById("cart")
  const cartitemshtml = document.getElementById("cartitem")

  const notify = document.getElementById("notification")
  const clearcartbtn = document.getElementById("clearcart")

  if (cartitemshtml.innerHTML == ``) {
    return
  } else {
    // Notify("clearcart", 60000, `<div id="message"> <p id="warning">Are you sure you want to clear your cart</p> <div id="buttons"><button id="comfirm" onclick="comfirm()" >Yes I do</button> <button id="deny" onclick="deny()">No I dont </button></div> </div>`)
    clearcartbtn.outerHTML = `<button id="clearcart" class="unclickable" >Clear</button>`
    console.log("passed")
  }
}

/////////////////////////////////////////////////////////////////////////////////



document.getElementById("searchBar").addEventListener("input", searchProduct)
document.getElementById("categories").addEventListener("change", sortList)
// document.getElementById("stock").addEventListener("change", restock)
displayProducts(products)