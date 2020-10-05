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
    fundo.value += x;

}

// Operadores:
function calcOpera(y = 0) {
    if (fundo.value.endsWith(y)) {
        return false;
    } else {
        fundo.value += y;
    }

}

// Resultado:
function resultado() {
    let resultado = 0;
    resultado = fundo.value;
    fundo.value = "";
    fundo.value = eval(resultado);
}