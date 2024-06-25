
var a = "allah";
var b = "shukar";

setTimeout(() => {
  console.log(a);
}, 500);

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => console.log("data==>", data));

console.log(b);


function login(callback) {
  setTimeout(() => {
    console.log("User login");
    callback();
  }, 1000);
}

function getUserData() {
  let userInfo = {
    fullName: "syed haider ali ",
  };
  setTimeout(() => {
    console.log(userInfo);
  }, 500);
}

login(getUserData);

let productsArr = [];
function getProductsFromApi(callBack) {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((products) => {
      console.log("products==>", products);
      callBack(products);
    });
}

function displayProducts(products) {
  console.log("See all products", products);
}

getProductsFromApi(displayProducts);

