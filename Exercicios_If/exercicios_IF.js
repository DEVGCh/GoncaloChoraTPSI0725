const prompt = require("prompt-sync")();

// ============================================================
// EX 1 - Converter segundos em horas, minutos e segundos
// ============================================================
function converterSegundos(totalSegundos) {
    let horas = Math.floor(totalSegundos / 3600);
    let resto = totalSegundos % 3600;
    let minutos = Math.floor(resto / 60);
    let segundos = resto % 60;

    console.log(horas + " hora(s), " + minutos + " minuto(s) e " + segundos + " segundo(s)");
}

// ============================================================
// EX 2 - Encontrar o maior e o menor entre 3 numeros
// ============================================================
function maiorMenor(num1, num2, num3) {
    let maior;
    let menor;

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    console.log("Maior: " + maior);
    console.log("Menor: " + menor);
}

// ============================================================
// EX 3 - Mostrar 2 numeros por ordem crescente e decrescente
// ============================================================
function ordemDoisNumeros(num1, num2) {
    if (num1 <= num2) {
        console.log("Crescente: " + num1 + ", " + num2);
        console.log("Decrescente: " + num2 + ", " + num1);
    } else {
        console.log("Crescente: " + num2 + ", " + num1);
        console.log("Decrescente: " + num1 + ", " + num2);
    }
}

// ============================================================
// EX 4 - Verificar se o cheque pode ser descontado
// ============================================================
function descontarCheque(saldo, cheque) {
    if (cheque > saldo) {
        console.log("Cheque não pode ser descontado. Saldo insuficiente.");
    } else {
        let saldoAtualizado = saldo - cheque;
        console.log("Cheque descontado, saldo: " + saldoAtualizado);
    }
}

// ============================================================
// EX 5 - Ler 3 valores e exibir por ordem crescente e decrescente
// ============================================================
function ordemTresNumeros(num1, num2, num3) {
    let maior;
    let meio;
    let menor;

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
        if (num2 >= num3) {
            meio = num2;
            menor = num3;
        } else {
            meio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
        if (num1 >= num3) {
            meio = num1;
            menor = num3;
        } else {
            meio = num3;
            menor = num1;
        }
    } else {
        maior = num3;
        if (num1 >= num2) {
            meio = num1;
            menor = num2;
        } else {
            meio = num2;
            menor = num1;
        }
    }

    console.log("Crescente: " + menor + ", " + meio + ", " + maior);
    console.log("Decrescente: " + maior + ", " + meio + ", " + menor);
}

// ============================================================
// EX 6 - Desconto de compra
// ============================================================
function descontoCompra(nomeCliente, valorCompra) {
    let desconto = 0;

    if (valorCompra <= 200) {
        desconto = valorCompra * 0.10;
    } else if (valorCompra <= 500) {
        desconto = valorCompra * 0.15;
    } else {
        desconto = valorCompra * 0.20;
    }

    let totalAPagar = valorCompra - desconto;

    console.log("Nome: " + nomeCliente);
    console.log("Compra: " + valorCompra.toFixed(2) + "€");
    console.log("Desconto: " + desconto.toFixed(2) + "€");
    console.log("Total a pagar: " + totalAPagar.toFixed(2) + "€");
}

// ============================================================
// EX 7 - Calcular média com pesos (2, 3, 5)
// ============================================================
function mediaComPesos(nota1, nota2, nota3) {
    let media = 0;
    media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    console.log("Média: " + media.toFixed(1));

    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// ============================================================
// EX 8 - Média de 10 notas e alunos acima da média
// ============================================================
function mediaDezNotas() {

    let soma = 0;
    let acimaDaMedia = 0;
    let notas = [];

    // repete o codigo 10 vezes, uma por aluno
    for (let i = 1; i <= 10; i++) {
        let nota = Number(prompt("Nota do aluno " + i + " (0-20): "));
        notas[i] = nota;
        soma = soma + nota;
    }

    let media = soma / 10;

    // verifica quantos alunos ficaram acima da media
    for (let i = 1; i <= 10; i++) {
        if (notas[i] >= media) {
            acimaDaMedia = acimaDaMedia + 1;
        }
    }

    console.log("Média da turma: " + media.toFixed(2));
    console.log("Alunos com nota igual ou acima da média: " + acimaDaMedia);
}

// ============================================================
// EX SWITCH - Exibir nome do mês
// ============================================================
function nomeMes(numero) {
    switch (numero) {
        case 1:  console.log("Janeiro");   break;
        case 2:  console.log("Fevereiro"); break;
        case 3:  console.log("Março");     break;
        case 4:  console.log("Abril");     break;
        case 5:  console.log("Maio");      break;
        case 6:  console.log("Junho");     break;
        case 7:  console.log("Julho");     break;
        case 8:  console.log("Agosto");    break;
        case 9:  console.log("Setembro");  break;
        case 10: console.log("Outubro");   break;
        case 11: console.log("Novembro");  break;
        case 12: console.log("Dezembro");  break;
        default: console.log("Número inválido. Insere um número entre 1 e 12."); break;
    }
}

// ============================================================
// TESTES
// ============================================================

console.log("=== EXERCÍCIO 1 ===");
converterSegundos(3665);

console.log("=== EXERCÍCIO 2 ===");
maiorMenor(5, 2, 8);

console.log("=== EXERCÍCIO 3 ===");
ordemDoisNumeros(7, 2);

console.log("=== EXERCÍCIO 4 ===");
descontarCheque(500, 300);

console.log("=== EXERCÍCIO 5 ===");
ordemTresNumeros(4, 9, 2);

console.log("=== EXERCÍCIO 6 ===");
descontoCompra("João", 350);

console.log("=== EXERCÍCIO 7 ===");
mediaComPesos(7, 6, 9);

console.log("=== EXERCÍCIO SWITCH - Nome do Mês ===");
nomeMes(5);

console.log("=== EXERCÍCIO 8 ===");
mediaDezNotas();
