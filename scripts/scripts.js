const containerCards = document.querySelector(".container-cards");
const loadProductsButton = document.querySelector("#loadProducts");
const formRegister = document.querySelector("#form-register");
const formInvite = document.querySelector("#form-invite");

let url = "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

async function loadProducts() {
  const response = await fetch("https://" + url);
  const responseJson = await response.json();
  renderProducts(responseJson.products);
  url = responseJson.nextPage;
}

function renderProducts(products) {
  products.forEach((product) => {
    const { image, name, description, oldPrice, price, installments } = product;
    const valueReplaced = installments.value.toString().replace(".", "," + "0");
    containerCards.innerHTML += `<div class="card">
                                        <div class="container-img">
                                            <img src="${image}" alt="Imagem do produto ${name}" title="${name}" >
                                        </div>
                                        <div class="container-price">
                                          <h4>${name}</h4>
                                          <p>${description}</p>
                                          <span>De: R$${oldPrice},00</span>
                                          <span>Por: R$${price},00</span>
                                          <span>ou ${installments.count}x de R$${valueReplaced}</span>
                                          <button class="button btn">comprar</button>
                                        </div>  
                                    </div>`;
  });
}

function checkEmptyFild(value) {
  if (value == "") {
    return true;
  } else {
    return false;
  }
}
function checkValidEmail(value) {
  if (
    !/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(
      value
    )
  ) {
    return true;
  } else {
    return false;
  }
}
function checkValidCpf(value) {
  if (!/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function registerUser() {
  const registerNameField = document.querySelector("#register-name-field");
  const registerEmailField = document.querySelector("#register-email-field");
  const registerCpfField = document.querySelector("#register-cpf-field");
  if (checkEmptyFild(registerNameField.value)) {
    registerNameField.focus();
    return alert("Por favor, preencha o campo de nome.");
  }
  if (checkValidEmail(registerEmailField.value)) {
    registerEmailField.focus();
    return alert("Por favor, preencha com um email válido.");
  }
  if (checkValidCpf(registerCpfField.value)) {
    registerCpfField.focus();
    return alert("Por favor, preencha com um cpf válido.");
  }
  registerNameField.value = "";
  registerEmailField.value = "";
  registerCpfField.value = "";
}

function inviteUser() {
  const inivitNameField = document.querySelector("#invit-name-field");
  const inivitEmailField = document.querySelector("#invit-email-field");
  if (checkEmptyFild(inivitNameField.value)) {
    inivitNameField.focus();
    return alert("Por favor, preencha o campo de nome.");
  }
  if (checkValidEmail(inivitEmailField.value)) {
    inivitEmailField.focus();
    return alert("Por favor, preencha com um email válido.");
  }
  inivitNameField.value = "";
  inivitEmailField.value = "";
}

window.onload = loadProducts;
loadProductsButton.addEventListener("click", loadProducts);

formRegister.addEventListener("submit", function (event) {
  event.preventDefault();
  registerUser();
});

formInvite.addEventListener("submit", function (event) {
  event.preventDefault();
  inviteUser();
});
