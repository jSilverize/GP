var xhr = new XMLHttpRequest();
xhr.open("GET", "../js/produtos.json", "true");
xhr.addEventListener("load", exibirProdutos);
xhr.send();

var localGerarCatalogo = document.querySelector(".catalogo");
var urlQuery = window.location.search;

function exibirProdutos() {
  if (urlQuery !== "") {
    console.info("Exibindo produtos de acordo com a Query de busca na URL.");
    listarProdutosBusca();
  } else {
    console.info("Exibindo todo os produtos do catálogo.");
    listarProdutos();
  }
}

function listarProdutos() {
  var lista = JSON.parse(xhr.responseText);
  for (var i in lista) {
    formatarProduto(lista[i]);
  }
}

function listarProdutosBusca() {

}

function formatarProduto(prod) {

  // 1) cria a DIV que ira listar o produto
  var produtoDiv = document.createElement("div");
  produtoDiv.setAttribute("class", "produto");

  // 2) cria a ASIDE que recebera a imagem do produto e botao para edita-lo
  var produtoImagemAside = document.createElement("aside");
  produtoImagemAside.setAttribute("class", "texto-centro");

  // 3) introduz a ASIDE dentro da DIV [passo 1]
  produtoDiv.appendChild(produtoImagemAside);

  // 4) cria a imagem do produto
  var produtoImagem = document.createElement("img");
  produtoImagem.setAttribute("class", "imagem-produto centralizar");
  produtoImagem.setAttribute("src", prod.src);
  produtoImagem.setAttribute("alt", "Imagem meramente ilustrativa");

  //5) introduz a imagem dentro da ASIDE [passo 3]
  produtoImagemAside.appendChild(produtoImagem);

  // 6) cria o botao para editar o produto
  var produtoBotaoEditar = document.createElement("a");
  produtoBotaoEditar.setAttribute("class", "botao botao-primario");
  produtoBotaoEditar.setAttribute("href", "editar.html?id=" + prod.id);
  produtoBotaoEditar.textContent = "EDITAR PRODUTO";

  // 7) introduz o botao dentro da ASIDE [passo 3]
  produtoImagemAside.appendChild(produtoBotaoEditar);
  
  // 15) adiciona o produto formatado na pagina
  localGerarCatalogo.appendChild(produtoDiv);
  
}