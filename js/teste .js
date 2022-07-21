let secaoPai = secaoPrincipal.closest("section");
let tagEmFalta = document.createElement("div");
tagEmFalta.classList.add("tagFalta");
tagEmFalta.innerHTML = `<h1>Desculpe, não encontramos produtos com esse filtro correspondente. 😔</h1>
    <span>Que tal navegar em outras categorias?</span>`;
secaoPai.appendChild(tagEmFalta);
