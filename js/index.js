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

function createCard(card) {
  let img = card.img;
  let id = card.id;
  let nome = card.nameItem;
  let categoria = card.tag;
  let valor = card.value;
  let descricao = card.description;

  let tagLi = document.createElement("li");
  tagLi.classList.add("card");
  let tagDivImg = document.createElement("div");
  tagDivImg.classList.add("imgcard");
  let tagImg = document.createElement("img");
  let tagDivtext = document.createElement("div");
  tagDivtext.classList.add("textcard");
  let tagCategoria = document.createElement("span");
  tagCategoria.id("categoria");
  tagNomeProduto = document.createElement("h2");
  tagDescricao = document.createElement("p");
  tagValor = document.createElement("span");
  tagValor.id("valor");
  tagButton = document.createElement("button");

  tagImg.src = img;
  tagImg.alt = nome;
  tagCategoria.innerText = categoria;
  tagValor.innerText = `R$ ${valor}`;
  tagDescricao.innerText = descricao;
  tagButton.innerText= 

  tagLi.appendChild(tagDivImg);
  tagDivImg.appendChild(tagImg);
  tagLi.appendChild(tagDivtext);
  tagDivtext.appendChild(tagCategoria);
  tagDivtext.appendChild(tagNomeProduto);
  tagDivtext.appendChild(tagDescricao);
  tagDivtext.appendChild(tagValor);
  tagDivtext.appendChild(tagButton);
}
