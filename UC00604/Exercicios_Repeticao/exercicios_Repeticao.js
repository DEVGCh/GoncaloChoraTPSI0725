const prompt = require("prompt-sync")();

// EX 1 - Mostrar os 30 primeiros números ímpares e pares

function primeiros30ImparesPares() {
    console.log("--- Pares ---");
    for (let i = 1; i <= 30; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    console.log("--- Ímpares ---");
    for (let i = 1; i <= 30; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


// EX 2 - Ler 10 números e dizer se cada um é par ou ímpar

function parOuImpar() {
    for (let i = 1; i <= 10; i++) {
        let numero = Number(prompt("Introduz o número " + i + ": "));
        if (numero % 2 === 0) {
            console.log(numero + " é par");
        } else {
            console.log(numero + " é ímpar");
        }
    }
}


// EX 3 - Ler notas de 10 alunos, calcular e mostrar a média

function mediaNotas() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let nota = Number(prompt("Nota do aluno " + i + " (0-20): "));
        soma = soma + nota;
    }

    let media = soma / 10;
    console.log("Média da turma: " + media.toFixed(2));
}


// EX 4 - Verificar se um número é primo

function numeroPrimo() {
    let numero = Number(prompt("Introduz um número inteiro: "));
    let primo = true;

    if (numero <= 1) {
        primo = false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
        }
    }

    if (primo === true) {
        console.log(numero + " é um número primo");
    } else {
        console.log(numero + " não é um número primo");
    }
}


// EX 5 - Escrever os primeiros 10.000 números inteiros

function primeiros10000() {
    for (let i = 1; i <= 10000; i++) {
        console.log(i);
    }
}


// EX 6 - Mostrar os 10 primeiros números primos

function primeiros10Primos() {
    let contador = 0;
    let numero = 2;

    while (contador < 10) {
        let primo = true;

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
            }
        }

        if (primo === true) {
            console.log(numero);
            contador = contador + 1;
        }

        numero = numero + 1;
    }
}


// EX 7 - Gerar a série: 10, 20, 30, ... 990, 1000

function serie10a1000() {
    for (let i = 10; i <= 1000; i = i + 10) {
        console.log(i);
    }
}


// EX 8 - Gerar duas séries: 10, 20, ... 1000 e 15, 25, ... 995

function duasSeries() {
    console.log("--- Série 1: 10, 20, 30 ... 1000 ---");
    for (let i = 10; i <= 1000; i = i + 10) {
        console.log(i);
    }

    console.log("--- Série 2: 15, 25, 35 ... 995 ---");
    for (let i = 15; i <= 995; i = i + 10) {
        console.log(i);
    }
}


// EX 9 - Solicitar número até estar entre 1 e 100 (do...while)

function numeroEntre1e100() {
    let numero;

    do {
        numero = Number(prompt("Introduz um número entre 1 e 100: "));
        if (numero < 1 || numero > 100) {
            console.log("Número inválido. Tenta novamente.");
        }
    } while (numero < 1 || numero > 100);

    console.log("Número válido: " + numero);
}


// EX 10 - Ler um número e mostrar quantos divisores tem

function contarDivisores() {
    let numero = Number(prompt("Introduz um número: "));
    let contadorDivisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contadorDivisores = contadorDivisores + 1;
        }
    }

    console.log(numero + " tem " + contadorDivisores + " divisores");
}


// EX 11 - Produzir o output: 1 / 22 / 333 / 4444 / 55555

function outputEscadinha() {
    for (let i = 1; i <= 5; i++) {
        let linha = "";
        for (let j = 1; j <= i; j++) {
            linha = linha + i;
        }
        console.log(linha);
    }
}


// EX 12 - Soma, subtração, divisão e multiplicação de um número por todos os menores que ele, com acumulador de operações

function operacoesTodosOsNumeros() {
    let numero = Number(prompt("Introduz um número: "));
    let totalOperacoes = 0;

    for (let i = 1; i < numero; i++) {
        console.log(numero + " + " + i + " = " + (numero + i));
        console.log(numero + " - " + i + " = " + (numero - i));
        console.log(numero + " * " + i + " = " + (numero * i));
        console.log(numero + " / " + i + " = " + (numero / i).toFixed(2));
        totalOperacoes = totalOperacoes + 4;
    }

    console.log("Total de operações efetuadas: " + totalOperacoes);
}


// EX 13 - Ler um número e mostrar a sua tabuada (1 a 10)

function tabuada() {
    let numero = Number(prompt("Introduz um número para a tabuada: "));

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}


// EX 14 - Mostrar todas as tabuadas de 1 a 100 (ciclos for)

function todasAsTabuadas() {
    for (let i = 1; i <= 100; i++) {
        console.log("--- Tabuada do " + i + " ---");
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
    }
}


// EX 15 - Escrever todos os caracteres ASCII (0 a 255) de 20 em 20 com opção de continuar ou sair

function tabelaASCII() {
    let i = 0;

    while (i <= 255) {
        for (let j = 0; j < 20 && i <= 255; j++) {
            console.log("Código: " + i + " | Carácter: " + String.fromCharCode(i));
            i = i + 1;
        }

        if (i <= 255) {
            let opcao = prompt("Continuar? (s/n): ");
            if (opcao !== "s") {
                console.log("Programa terminado.");
                return;
            }
        }
    }

    console.log("Fim da tabela ASCII.");
}


// EX 16 - Média de 30 números pares entre 1 e 50

function mediaPares() {
    let soma = 0;
    let contador = 0;

    while (contador < 30) {
        let numero = Number(prompt("Introduz um número par entre 1 e 50 (" + (contador + 1) + "/30): "));

        if (numero < 1 || numero > 50 || numero % 2 !== 0 || !Number.isInteger(numero)) {
            console.log("Número inválido. Tem de ser um número par inteiro entre 1 e 50.");
        } else {
            soma = soma + numero;
            contador = contador + 1;
        }
    }

    let media = soma / 30;
    console.log("Média dos 30 números pares: " + media.toFixed(2));
}


// EX 17 - Múltiplos de 5 mas não múltiplos de 3, de 1 a 1000

function multiplosDe5NaoDe3() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}


// EX 18 - Ler quantos números perfeitos existem até um valor

function numerosPerfeitosFuncao(numero) {
    let somaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somaDivisores = somaDivisores + i;
        }
    }

    return somaDivisores === numero;
}

function numerosPerfeitos() {
    let limite = Number(prompt("Até que número queres procurar números perfeitos? "));
    let contador = 0;

    for (let i = 1; i <= limite; i++) {
        if (numerosPerfeitosFuncao(i) === true) {
            console.log(i + " é um número perfeito");
            contador = contador + 1;
        }
    }

    console.log("Total de números perfeitos encontrados: " + contador);
}


// EX 19 - Mostrar os primeiros 60 números de Fibonacci

function fibonacci() {
    let a = 1;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 3; i <= 60; i++) {
        let proximo = a + b;
        console.log(proximo);
        a = b;
        b = proximo;
    }
}


// TESTES


console.log("=== EX 1 - Pares e Ímpares até 30 ===");
primeiros30ImparesPares();

console.log("=== EX 6 - 10 Primeiros Primos ===");
primeiros10Primos();

console.log("=== EX 7 - Série 10 a 1000 ===");
serie10a1000();

console.log("=== EX 11 - Escadinha ===");
outputEscadinha();

console.log("=== EX 17 - Múltiplos de 5 não de 3 ===");
multiplosDe5NaoDe3();

console.log("=== EX 19 - Fibonacci ===");
fibonacci();


// parOuImpar();
// mediaNotas();
// numeroPrimo();
// primeiros10000();
// duasSeries();
// numeroEntre1e100();
// contarDivisores();
// operacoesTodosOsNumeros();
// tabuada();
// todasAsTabuadas();
// tabelaASCII();
// mediaPares();
// numerosPerfeitos();
