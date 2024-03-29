/* AQUI FICARA A  VITRINE

CARDS DE PRODUTOS

CARDS DE FORMA DINÂMICA
BOTAO DE COMPRA FUNCIONAL
ADICIONAR O PRODUTO AO CARRINHO

CARRINHO DE COMPRAS
ADICIONAR OU REMOVER PRODUTOS 
O CARRINHO DEVERA CONTAR OS ITENS 
SOMAR O VALOR DOS ITENS E DAR O RESULTADO

*/

//Funções de criar o card e listar os produtos.

function createCard(card) {
  let img = card.img;
  let id = card.id;
  let nome = card.nameItem;
  let categoria = card.tag;
  let valor = card.value;
  let descricao = card.description;
  let buton = card.addCart;
  let tagLi = document.createElement("li");
  let tagDivImg = document.createElement("div");
  let tagImg = document.createElement("img");
  let tagDivtext = document.createElement("div");
  let tagCategoria = document.createElement("span");
  let tagNomeProduto = document.createElement("h2");
  let tagDescricao = document.createElement("p");
  let tagValor = document.createElement("span");
  let tagButton = document.createElement("button");

  tagLi.classList.add("card");
  tagDivImg.classList.add("imgcard");
  tagDivtext.classList.add("textcard");
  tagCategoria.id = "categoria";
  tagValor.id = "valor";

  tagNomeProduto.innerText = nome;
  tagImg.src = img;
  tagImg.alt = nome;
  tagCategoria.innerText = categoria;
  tagValor.innerText = `R$ ${valor}.00`;
  tagDescricao.innerText = descricao;
  tagButton.innerText = buton;
  tagButton.setAttribute("id", id);

  tagLi.appendChild(tagDivImg);
  tagDivImg.appendChild(tagImg);
  tagLi.appendChild(tagDivtext);
  tagDivtext.appendChild(tagCategoria);
  tagDivtext.appendChild(tagNomeProduto);
  tagDivtext.appendChild(tagDescricao);
  tagDivtext.appendChild(tagValor);
  tagDivtext.appendChild(tagButton);

  return tagLi;
}

function listProducts(data, section) {
  section.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    let cardProduto = createCard(produto);
    section.appendChild(cardProduto);
  }
}

//Menu nav

let tagMenu = document.getElementById("menuprin");
let tagSectionAbove = document.querySelector(".principal");
let tagTituloFalta = document.querySelector(".principal h1");
let tagSpanFalta = document.querySelector(".principal span");

tagMenu.addEventListener("click", function (event) {
  let btnCategoria = event.target;
  if (btnCategoria.tagName == "A") {
    let idCategoria = btnCategoria.id;
    resultadoCategoria = categorizar(idCategoria);
    listProducts(resultadoCategoria, secaoPrincipal);
    console.log(resultadoCategoria);
  }
});

function categorizar(idCategoria) {
  let categorias = [];

  if (idCategoria == "Todos") {
    categorias = data;
    return categorias;
  } else {
    for (let i = 0; i < data.length; i++) {
      let dataProduct = data[i].tag;
      if (idCategoria == dataProduct) {
        categorias.push(data[i]);
      }
    }
  }
  if (categorias.length >= 1) {
    tagTituloFalta.innerText = "";
    tagSpanFalta.innerText = "";
    tagSectionAbove.className = "";
    return categorias;
  } else {
    tagSectionAbove.className = "principalis";
    tagTituloFalta.innerText =
      "Desculpe, não encontramos produtos com esse filtro correspondente. 😔";
    tagSpanFalta.innerText = "Que tal navegar em outras categorias?";
  }
}

//Secao principal

let secaoPrincipal = document.querySelector(".cards");
let carrinhoVazio = document.querySelector(".carrinhovazio");
let quantTot = document.querySelector(".result h3");
let valorTot = document.querySelector(".result h2");

secaoPrincipal.addEventListener("click", identificarClique);
function identificarClique(event) {
  let btnAdicionar = event.target;
  if (btnAdicionar.tagName == "BUTTON") {
    let idProduto = btnAdicionar.id;
    let produto = data.find(function (produto) {
      if (produto.id == idProduto) {
        return produto;
      }
    });

    addCarrinho(produto);
  }
}

function addCarrinho(produto) {
  carrinhoCompras.push(produto);
  listProducts(carrinhoCompras, sectionCarrinho);
  if (carrinhoCompras.length == 1) {
    quantTot.innerText = `Quantidade : ${carrinhoCompras.length} Produto.`;
    valorTot.innerText = `Valor Total: ${somaCarrinho(carrinhoCompras)}.00 R$`;
  } else if (carrinhoCompras.length > 1) {
    quantTot.innerText = `Quantidade : ${carrinhoCompras.length} Produtos.`;
    valorTot.innerText = `Valor Total: ${somaCarrinho(carrinhoCompras)}.00 R$`;
  }
  carrinhoVazio.innerHTML = "";
}

listProducts(data, secaoPrincipal);

//Javascript busca

let inputBusca = document.querySelector(".buscar input");
let btnBusca = document.querySelector(".buscar button");

btnBusca.addEventListener("click", function (event) {
  let valorUsuario = inputBusca.value;
  let resultadoBusca = busca(valorUsuario);

  listProducts(resultadoBusca, secaoPrincipal);
});

function busca(valor) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let pesquisa = valor.toLowerCase();
    let nomeProduto = data[i].nameItem.toLowerCase();
    let categoria = data[i].tag.toLowerCase();

    if (nomeProduto.includes(pesquisa) || categoria.includes(pesquisa)) {
      result.push(data[i]);
    } else {
    }
  }
  if (result.length >= 1) {
    tagTituloFalta.innerText = "";
    tagSpanFalta.innerText = "";
    tagSectionAbove.className = "";
    return result;
  } else {
    tagSectionAbove.className = "principalis";
    tagTituloFalta.innerText =
      "Desculpe, não encontramos produtos com esse filtro correspondente. 😔";
    tagSpanFalta.innerText = "Que tal pesquisar outras palavras-chaves?";
  }
}

//JavaScript Carrinho

let carrinhoCompras = [];
let sectionCarrinho = document.querySelector(".itenscarrinho");

function somaCarrinho(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    product = arr[i];
    let value = product.value;
    result += value;
  }
  return result;
}

if (carrinhoCompras.length == 0) {
  quantTot.innerText = "Adicione mais produtos.🛒";
  valorTot.innerText = ``;
} else {
  quantTot.innerText = `Quantidade : ${carrinhoCompras.length} Produtos`;
  valorTot.innerText = `Valor Total: ${somaCarrinho(carrinhoCompras)}.00 `;
}

sectionCarrinho.addEventListener("click", removeProduct);
function removeProduct(event) {
  let btnRemover = event.target;
  if (btnRemover.tagName == "BUTTON") {
    let produtoRemover = carrinhoCompras.find(function (produto) {
      produto.id === btnRemover.id;
    });
    let indexProduto = carrinhoCompras.indexOf(produtoRemover);
    carrinhoCompras.splice(indexProduto, 1);
    listProducts(carrinhoCompras, sectionCarrinho);

    if (carrinhoCompras.length == 0) {
      quantTot.innerText = "Adicione mais produtos.🛒";
      valorTot.innerText = ``;
      carrinhoVazio.innerHTML = `<h3>O carrinho está vazio..</h3>
      <span>Adicione mais itens.</span>`;
    } else if (carrinhoCompras.length == 1) {
      quantTot.innerText = `Quantidade : ${carrinhoCompras.length} Produto.`;
      valorTot.innerText = `Valor Total: ${somaCarrinho(
        carrinhoCompras
      )}.00 R$`;
    } else {
      quantTot.innerText = `Quantidade : ${carrinhoCompras.length} Produtos.`;
      valorTot.innerText = `Valor Total: ${somaCarrinho(
        carrinhoCompras
      )}.00 R$`;
    }
  }
}
