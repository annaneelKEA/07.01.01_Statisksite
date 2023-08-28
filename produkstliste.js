// fetche////
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct//
  products.forEach(showProduct);
  // (product) => showProduct(product)/// det her kan man også skrive, det andet er bare nemmere.
}

function showProduct(product) {
  //   console.log(product);
  // Fange template//
  const template = document.querySelector("#smallProductTemplate").content;
  // Lave en kopi//
  const copy = template.cloneNode(true);
  // Ændre indhold//
  copy.querySelector("h4").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.category;
  //   copy.querySelector("p").textContent = product.gender;
  //   copy.querySelector("p").textContent = product.subcategory;
  //   copy.querySelector("p").textContent = product.articletype;
  //   copy.querySelector("p").textContent = product.season;
  //   copy.querySelector("p").textContent = product.productionyear;
  //   copy.querySelector("p").textContent = product.usagetype;
  copy.querySelector(".p_price").textContent = product.price;
  copy.querySelector(".p_1").textContent = product.brandname;
  copy.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp";

  if (product.souldout) {
    // produkt udsolgt//
    copy.querySelector("article").classList.add("soldOut");
    copy.querySelector("article").classList.add("procent");
  }
  // appende//
  document.querySelector("main").appendChild(copy);
}

{
  /**       <div class="smallProduct">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="blå jersey">
                        <h4>Sahara Team India Fanwear Round Neck Jersey</h4>
                        <p class="p_1">Tshirts | Nike</p>
                        &nbsp;
                        <p class="p_price">DKK 1595,-</p>
                        <div class="p_read"> <a href="produkt.html">Read more</a></div>
                    </div> */
  /**
   * id	1164
   * gender	"Men"
   * category	"Apparel"
   * subcategory	"Topwear"
   * articletype	"Tshirts"
   * season	"Winter"
   * productionyear	2015
   * usagetype	"Sports"
   * productdisplayname	"Blue T20 Indian Cricket Jersey"
   * price	1595
   * discount	28
   * brandname	"Nike"
   * soldout	1 */
}
