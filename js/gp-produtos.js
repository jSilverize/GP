var categorias =
        [
          "Vestuário",
          "Alimentício",
          "Serviço"
        ];

var categoriasSelect = document.getElementById("produtoCategoria");
criarOpcoes();

function criarOpcoes() {
  
  for (var i in categorias) {
    
    var opcao = document.createElement("option");
    opcao.setAttribute("value", categorias[i]);
    opcao.textContent = "" + categorias[i];
    
    categoriasSelect.appendChild(opcao);
    
  }
  
}