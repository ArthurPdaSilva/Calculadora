// Variável:
let fundo = document.getElementById('fundo');

// Chamar Função:
document.addEventListener('keypress', (e) => {
    if (e.which == 13) {
        return resultado('=');
    }
})

// Limpar:
function apagar() {
    fundo.value = "";
}

// Números:
function calc(x = 0) {
    // Se o valor que está em fundo não é um número 
    // if (isNaN(fundo.value) || valor != Number) {
    //     return false;
    // } else {
    //     fundo.value += x;
    // }
    fundo.value += x;
}

// Resultado:
function resultado() {
    let resultado = 0
    resultado = fundo.value
    fundo.value = "";
    fundo.value = eval(resultado);
}