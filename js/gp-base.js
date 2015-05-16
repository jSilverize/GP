/* Através da tag <title> será adicionado um texto na tag <header> */
var tituloHead = document.getElementsByTagName("title")[0];
var tituloCabecalho = document.querySelector("#paginaTitulo");
tituloCabecalho.textContent = tituloHead.textContent.replace("GP |", "");


/* Código para inserção do ANO no rodapé da página */
var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
var inserirAnoAtual = document.querySelector("#exibirAnoAtual");
inserirAnoAtual.textContent = "" + anoAtual;
