// index.js
let container = document.getElementById("main");

let data = [];

// get the data
fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    displayData(res);
  });

function displayData(data) {
  data.forEach(function (product) {
    let productCard = document.createElement("div");
    productCard.className = "product-card";

    let productImg = document.createElement("img");
    productImg.src = product.image;

    let title = document.createElement("p");
    title.innerText = product.title;

    let price = document.createElement("p");
    price.innerText = "INR : " + product.price;

    productCard.append(productImg, title, price);

    container.append(productCard);
  });
}
