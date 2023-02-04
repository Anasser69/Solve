// header

let header = document.querySelector("header");

window.onscroll = function () {
  if (this.scrollY > "300") {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};

// menu

let click = document.querySelector(".click");

click.addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("click");
});

// tabs

let tabs = document.querySelectorAll(".shop li");
let imgs = document.querySelectorAll(".shop img");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    imgs.forEach((img) => {
      if (e.target.className !== img.getAttribute("alt")) {
        img.parentElement.parentElement.style.display = "none";
      } else {
        img.parentElement.parentElement.style.display = "block";
      }
    });
  });
});

// cart
let cart = document.querySelector(".cart");
let cartWord = document.querySelector("header .cart-word");
let close = document.querySelector(".cart .close");
let getIt = document.querySelectorAll(".shop button");

let openCart = function (element) {

  element.addEventListener("click", function () {
    let overlay = document.createElement("div");
    cart.classList.remove("close");
    cart.style.cssText =
      "z-index:2000;opacity: 1;right:0;overflow-x: hidden;overflow-y: auto";
    overlay.className = "overlay";
    document.body.append(overlay);
  });
};

openCart(cartWord);

close.addEventListener("click", function () {
  cart.classList.add("close");
  document.querySelector(".overlay").remove();
});

let cont = document.createElement("div");
cont.className = "img-cart";
cont.style.cssText =
  "overflow-y: auto;height: max-conten;width: 100%;z-index: 50; margin-bottom: 200px;";

getIt.forEach((button) => {
  button.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    cart.classList.remove("close");
    cart.style.cssText = "z-index:2000;opacity: 1;right:0;overflow-y: auto;";
    overlay.className = "overlay";
    document.body.append(overlay);

    let copy = e.target.parentElement.parentElement.cloneNode(true);
    let del = document.createElement("span");
    del.append("Remove");
    del.className = "remove";

    cont.append(copy);
    cart.append(cont);
    copy.style.cssText = "width: 200px;";
    copy.append(del);
    document
      .querySelectorAll(".cart img")
      .forEach(
        (img) => (img.style.cssText = "border-radius:50%;height: 150px")
      );
    document
      .querySelectorAll(".cart button")
      .forEach((but) => (but.style.cssText = "display: none"));

    del.classList.remove("click");

    del.onclick = () => {
      del.classList.add("click");
      del.parentElement.remove();
    };
  });
});
