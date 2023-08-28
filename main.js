// fetche////
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showSuperheroes);
