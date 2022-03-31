const cart = document.getElementById("cart");
const productList = document.getElementById("product-list");
const cartBody = document.getElementById("cart-body");
const fushButton = document.getElementById("button-clean");

let productCart = [];

const triggerEvents = () => {
  productList.addEventListener("click", addProduct);
  //   cart.addEventListener("click", removeProduct);
  //   fushButton.addEventListener("click", cleanCart);
};

const addProduct = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("bxs-cart-add")) {
    const product = e.target.parentElement.parentElement.parentElement;
    return getDataProduct(product);
  }
};

const getDataProduct = (product) => {
  const productData = {
    image: product.querySelector(".product__image").src,
    title: product.querySelector(".product__name").textContent,
    price: product.querySelector(".product__discount").textContent,
    id: product.getAttribute("data-id"),
    amount: 1,
  };
  if (productCart.some((product) => product.id === productData.id)) {
    const products = productCart.map((product) => {
      if (product.id === productData.id) {
        product.amount++;
        return product;
      } else {
        return product;
      }
    });
    productCart = [...products];
  } else {
    productCart = [...productCart, productData];
    console.log(productCart);
  }
};
triggerEvents();
