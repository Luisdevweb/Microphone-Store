const iconCart = document.querySelector(".bx-cart");
const cart = document.getElementById("cart");
const productList = document.getElementById("product-list");
const cartBody = document.getElementById("cart-body");
const fushButton = document.getElementById("button-clean");

let productCart = [];

const triggerEvents = () => {
  iconCart.addEventListener("click", () => {
    cart.classList.toggle("cart--show");
  });
  productList.addEventListener("click", addProduct);
  cart.addEventListener("click", removeProduct);
  fushButton.addEventListener("click", cleanCart);
};

const addProduct = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("bxs-cart-add")) {
    const product = e.target.parentElement.parentElement.parentElement;
    return getDataProduct(product);
  }
};

const removeProduct = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("remove-product")) {
    const productId = e.target.getAttribute("data-id");
    productCart = productCart.filter((product) => product.id !== productId);
    renderProducts();
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
    const products = filterDuplicatedProducts(productData);
    productCart = [...products];
  } else {
    productCart = [...productCart, productData];
    console.log(productCart);
  }
  return renderProducts();
};

const filterDuplicatedProducts = (productData) => {
  return productCart.map((product) => {
    if (product.id === productData.id) {
      product.amount++;
      return product;
    } else {
      return product;
    }
  });
};

const renderProducts = () => {
  cleanCart();

  productCart.forEach((product) => {
    const row = document.createElement("div");
    row.innerHTML = `
    <ul class="cart__list">
      <li class="cart__item"><img src="${product.image}" width="50" height="80"/></li>
      <li class="cart__item">${product.title}</li>
      <li class="cart__item">${product.price}</li>
      <li class="cart__item">${product.amount}</li>
      <li class="cart__item">
        <a href="#" class="remove-product" data-id="${product.id}">X</a>
      </li>
    </ul>
    `;
    cartBody.appendChild(row);
  });
};

const cleanCart = () => {
  while (cartBody.firstChild) {
    cartBody.removeChild(cartBody.firstChild);
  }
};
triggerEvents();
