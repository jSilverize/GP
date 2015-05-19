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

  for (var j in urlQuery) {
    urlQuery = "" + urlQuery.replace("?", "");
    urlQuery = "" + urlQuery.replace("=", ":");
    urlQuery = "" + urlQuery.replace("%2C", ",");
    urlQuery = "" + urlQuery.replace("+", " ");
    urlQuery = "" + urlQuery.replace("%C3%A1", "á");
    urlQuery = "" + urlQuery.replace("%C3%AD", "í");
    urlQuery = "" + urlQuery.replace("%C3%A7", "ç");
  }

  urlQuery = urlQuery.substring(urlQuery.indexOf(":") + 1);
  console.log("Valor de busca: " + urlQuery);

  var lista = JSON.parse(xhr.responseText);
  var encontrou = false;

  var exibirTextoBusca = document.getElementById("textoBusca");

  for (var i in lista) {
    var produto = lista[i];

    if (produto.titulo.indexOf(urlQuery) > -1) {
      formatarProduto(produto);
      encontrou = true;
    }

    if (produto.preco.indexOf(urlQuery) > -1) {
      formatarProduto(produto);
      encontrou = true;
    }

    if (produto.categoria.indexOf(urlQuery) > -1) {
      formatarProduto(produto);
      encontrou = true;
    }

    if (produto.descricao.indexOf(urlQuery) > -1) {
      formatarProduto(produto);
      encontrou = true;
    }

  }

  if (encontrou) {

    exibirTextoBusca.textContent = 'por "' + urlQuery + '"';

  } else {
    console.info("Exibir mensagem dizendo que não foi possível encontrar produtos.");

    var secaoListarProdutos = document.getElementById("listarProdutos");
    secaoListarProdutos.setAttribute("class", "oculto");

    var secaoInformarErroBusca = document.getElementById("informarErroBusca");
    secaoInformarErroBusca.classList.remove("oculto");

    var textoBusca1 = document.getElementById("textoBusca1");
    var textoBusca2 = document.getElementById("textoBusca2");
    textoBusca1.textContent = "" + urlQuery;
    textoBusca2.textContent = "" + urlQuery;

  }

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

  // 8) cria a ASIDE que recebera as informacoes restantes do produto
  var produtoPropriedades = document.createElement("aside");

  // 9) introduz a ASIDE dentro da DIV [passo 1]
  produtoDiv.appendChild(produtoPropriedades);

  // 10) cria a div que aplica espacamento interno nas informacoes restantes do produto
  var produtoPropriedadesDiv = document.createElement("div");
  produtoPropriedadesDiv.setAttribute("class", "padding-15-h");

  // 11) introduz a DIV dentro da ASIDE [passo 9]
  produtoPropriedades.appendChild(produtoPropriedadesDiv);


  var produtoTituloLabel = document.createElement("h4");
  produtoTituloLabel.textContent = "Título";

  var produtoTitulo = document.createElement("span");
  produtoTitulo.setAttribute("class", "texto-primario");
  produtoTitulo.textContent = "" + prod.titulo;

  produtoTituloLabel.appendChild(produtoTitulo);

  produtoPropriedadesDiv.appendChild(produtoTituloLabel);


  var produtoPrecoLabel = document.createElement("h4");
  produtoPrecoLabel.textContent = "Preço";

  var produtoPreco = document.createElement("span");
  produtoPreco.setAttribute("class", "texto-primario");
  produtoPreco.textContent = "R$ " + prod.preco;

  produtoPrecoLabel.appendChild(produtoPreco);


  var produtoEstoqueLabel = document.createElement("h4");
  produtoEstoqueLabel.textContent = "Estoque";

  var produtoEstoque = document.createElement("span");
  produtoEstoque.setAttribute("class", "texto-primario");
  produtoEstoque.textContent = "" + prod.estoque + "un.";

  produtoEstoqueLabel.appendChild(produtoEstoque);


  var grade = document.createElement("div");
  grade.setAttribute("class", "grade-2");

  var gradeInfo1 = document.createElement("div");
  gradeInfo1.appendChild(produtoPrecoLabel);

  var gradeInfo2 = document.createElement("div");
  gradeInfo2.appendChild(produtoEstoqueLabel);

  grade.appendChild(gradeInfo1);
  grade.appendChild(gradeInfo2);

  produtoPropriedadesDiv.appendChild(grade);


  var produtoCategoriaLabel = document.createElement("h4");
  produtoCategoriaLabel.textContent = "Categoria";

  var produtoCategoria = document.createElement("span");
  produtoCategoria.setAttribute("class", "texto-primario");
  produtoCategoria.textContent = "" + prod.categoria;

  produtoCategoriaLabel.appendChild(produtoCategoria);

  produtoPropriedadesDiv.appendChild(produtoCategoriaLabel);


  var produtoDescricaoLabel = document.createElement("h4");
  produtoDescricaoLabel.textContent = "Descrição";

  var produtoDescricao = document.createElement("div");
  produtoDescricao.textContent = "" + prod.descricao;
  produtoDescricao.setAttribute("class", "descricao texto-primario");

  produtoPropriedadesDiv.appendChild(produtoDescricaoLabel);
  produtoPropriedadesDiv.appendChild(produtoDescricao);


  produtoDiv.appendChild(produtoPropriedades);


  // adiciona o produto formatado na pagina
  localGerarCatalogo.appendChild(produtoDiv);

}