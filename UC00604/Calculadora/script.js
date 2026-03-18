function escrever(valor) {
    let visor = document.getElementById("visor");  // vai buscar o  id="visor"
    visor.value = visor.value + valor;             // adiciona o novo valor ao que já estava no visor
}

function calcular() {
    let visor = document.getElementById("visor");
    let resultado = eval(visor.value);                   // eval() calcula a expressão
    visor.value = visor.value + "= " + resultado;        // mostra expressão = resultado
}

function limpar() {
    let visor = document.getElementById("visor");  
    visor.value = "";                              // string vazia
}
