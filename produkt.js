const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h2").textContent = product.productdisplayname;
  document.querySelector("h1").textContent = product.brandname;
  document.querySelector("p").textContent = product.description;
  document.querySelector("img").src = `http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg`;
}
