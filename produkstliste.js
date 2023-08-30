const urlParams = new URLSearchParams(window.location.search);
const kategori = urlParams.get("kategori");

// fetche////
fetch("https://kea-alt-del.dk/t7/api/products?kategori=" + kategori)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct//
  products.forEach(showProduct);
  // (product) => showProduct(product)/// det her kan man også skrive, det andet er bare nemmere.
}

function showProduct(product) {
  console.log(product);
  //   console.log(product);
  // Fange template//
  const template = document.querySelector("#smallProductTemplate").content;
  // Lave en kopi//
  const copy = template.cloneNode(true);
  // Ændre indhold//
  copy.querySelector("h4").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.category;
  copy.querySelector(".p_price").textContent = product.price + " kr,-";
  copy.querySelector(".p_1").textContent = product.brandname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    // produkt udsolgt//
    copy.querySelector(".smallProduct").classList.add("udsolgt");
  }
  if (product.discount) {
    copy.querySelector(".smallProduct").classList.add("udsalg");
    copy.querySelector(".procent").textContent = product.discount + "%";
  }
  copy.querySelector(".p_read").setAttribute("href", `produkt.html?id=${product.id}`);
  // appende//
  document.querySelector("#grid").appendChild(copy);
}
