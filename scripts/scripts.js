const containerCards = document.querySelector(".container-cards");
const loadProductsButton = document.querySelector("#loadProducts");

let url = "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

async function loadProducts() {
  const response = await fetch("https://" + url);
  const responseJson = await response.json();
  renderProducts(responseJson.products);
  url = responseJson.nextPage;
}

function renderProducts(products) {
  products.map((product) => {
    const { image, name, description, oldPrice, price, installments } = product;
    const valueReplaced = installments.value.toString().replace(".", "," + "0");
    containerCards.innerHTML += `<div class="card">
                                        <div class="container-img">
                                            <img src="${image}" alt="Imagem do produto ${name}" title="${name}" >
                                        </div>
                                        <h4>${name}</h4>
                                        <p>${description}</p>
                                        <span>De: R$${oldPrice},00</span>
                                        <span>Por: R$${price},00</span>
                                        <span>ou ${installments.count}x de R$${valueReplaced}</span>
                                        <button class="button">comprar</button>
                                    </div>`;
  });
}

window.onload = loadProducts;
loadProductsButton.addEventListener("click", loadProducts);
