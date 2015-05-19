var xhr = new XMLHttpRequest();
xhr.open("GET", "../js/produtos.json", "true");
xhr.addEventListener("load", exibirProduto);
xhr.send();

var urlQuery = window.location.search;
urlQuery = "" + urlQuery.replace("?", "");
urlQuery = urlQuery.substring(urlQuery.indexOf("=") + 1);
console.log(urlQuery);

var paginaTitulo;
var produtoTitulo = document.getElementById("produtoTitulo");
var produtoPreco = document.getElementById("produtoPreco");
var produtoQuantidade = document.getElementById("produtoQuantidade");
var produtoCategoria = document.getElementById("produtoCategoria");
var produtoDescricao = document.getElementById("produtoDescricao");
var produtoImagemURL = document.getElementById("produtoImagemURL");

function exibirProduto() {
  var lista = JSON.parse(xhr.responseText);
  for (var i in lista) {
    var produto = lista[i];
    if (produto.id == urlQuery) {
      produtoTitulo.value = produto.titulo;
      produtoPreco.value = produto.preco;
      produtoQuantidade.value = produto.estoque;
      produtoCategoria.value = produto.categoria;
      produtoDescricao.value = produto.descricao;
      produtoImagemURL.setAttribute("src", produto.src);
    }
  }
}