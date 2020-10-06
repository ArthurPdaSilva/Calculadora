// Variáveis:
let fundo = document.getElementById("fundo");
let lista = [];

// Chamar Função:
document.addEventListener("keypress", (e) => {
  if (e.which == 13) {
    return resultado("=");
  }
});

// Limpar:
function apagar() {
  fundo.value = "";
}

// Números:
function calc(x = 0) {
  lista = [];
  fundo.value += x;
}

// Operadores:
function calcOpera(y = 0) {
  if (lista.includes(y) || fundo.value.length == 0) {
    return false;
  } else {
    fundo.value += y;
    lista.push("-", "*", "+", "/", ",");
  }
}

// Resultado:
function resultado() {
  let resultado = 0;
  resultado = fundo.value;
  fundo.value = "";
  // Faz cálculos com strings;
  fundo.value = eval(resultado);
}
