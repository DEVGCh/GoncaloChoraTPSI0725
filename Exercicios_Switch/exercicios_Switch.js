const prompt = require("prompt-sync")();

// ============================================================
// EX 1 - Tipo de dia
// ============================================================
function tipoDeDia(dia) {
    switch (dia) {
        case "segunda":
        case "terca":
        case "quarta":
        case "quinta":
        case "sexta":
            console.log("Dia útil");
            break;
        case "sabado":
        case "domingo":
            console.log("Fim de semana");
            break;
        default:
            console.log("Dia inválido");
            break;
    }
}

// ============================================================
// EX 2 - Classificação de nota
// ============================================================
function classificacaoNota(nota) {
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bom");
    } else if (nota >= 50) {
        console.log("Suficiente");
    } else {
        console.log("Insuficiente");
    }
}

// ============================================================
// EX 3 - Tipo de pedido
// ============================================================
function tipoDePedido(pedido) {
    switch (pedido.tipo) {
        case "compra":
            console.log("Compra de " + pedido.valor + "€");
            break;
        case "venda":
            console.log("Venda de " + pedido.valor + "€");
            break;
        default:
            console.log("Pedido desconhecido");
            break;
    }
}

// ============================================================
// EX 4 - Tipo de dado
// ============================================================
function tipoDeDado(valor) {
    if (typeof valor === "number" && valor % 1 === 0) {
        console.log("Número inteiro");
    } else if (typeof valor === "number") {
        console.log("Número decimal");
    } else if (typeof valor === "string") {
        console.log("String textual");
    } else if (typeof valor === "object") {
        console.log("Lista");
    } else {
        console.log("Tipo desconhecido");
    }
}

// ============================================================
// EX 5 - Análise de mensagem
// ============================================================
function analisarMensagem(mensagem) {
    let ultimoCaracter = mensagem[mensagem.length - 1];

    if (mensagem === "olá" || mensagem === "bom dia") {
        console.log("Saudação");
    } else if (ultimoCaracter === "?") {
        console.log("Pergunta");
    } else if (mensagem === "tchau" || mensagem === "adeus") {
        console.log("Despedida");
    } else {
        console.log("Mensagem genérica");
    }
}

// ============================================================
// EX 6 - Estado do servidor
// ============================================================
function estadoDoServidor(servidor) {
    if (servidor.status === "ok" && servidor.tempo_resposta > 200) {
        console.log("Servidor lento");
    } else if (servidor.status === "ok") {
        console.log("Servidor ativo");
    } else if (servidor.status === "erro") {
        console.log("Servidor indisponível");
    } else {
        console.log("Estado desconhecido");
    }
}

// ============================================================
// EX 7 - Classificação de produto
// ============================================================
function classificacaoProduto(produto) {
    if (produto.categoria === "eletrônico" && produto.preco > 1000) {
        console.log("Produto de luxo");
    } else if (produto.categoria === "eletrônico") {
        console.log("Produto comum");
    } else if (produto.categoria === "alimento") {
        console.log("Produto alimentar");
    } else {
        console.log("Categoria desconhecida");
    }
}

// ============================================================
// EX 8 - Operação matemática
// ============================================================
function operacaoMatematica(operacao, num1, num2) {
    let resultado = 0;

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            console.log(resultado);
            break;
        case "subtrai":
            resultado = num1 - num2;
            console.log(resultado);
            break;
        case "multiplica":
            resultado = num1 * num2;
            console.log(resultado);
            break;
        case "divide":
            if (num2 === 0) {
                console.log("Erro: divisão por zero");
            } else {
                resultado = num1 / num2;
                console.log(resultado);
            }
            break;
        default:
            console.log("Operação inválida");
            break;
    }
}

// ============================================================
// EX 9 - Processamento de requisição
// ============================================================
function processarRequisicao(requisicao) {
    if (requisicao.metodo === "GET") {
        console.log("Requisição GET recebida");
    } else if (requisicao.metodo === "POST" && requisicao.conteudo !== "") {
        console.log("Requisição POST com dados válidos");
    } else if (requisicao.metodo === "POST" && requisicao.conteudo === "") {
        console.log("Requisição POST sem dados");
    } else {
        console.log("Método não suportado");
    }
}

// ============================================================
// EX 10 - Pedra, papel ou tesoura
// ============================================================
function pedraPapelTesoura(jogador1, jogador2) {
    if (jogador1 === jogador2) {
        console.log("Empate");
    } else if (jogador1 === "pedra" && jogador2 === "tesoura") {
        console.log("Jogador 1 venceu");
    } else if (jogador1 === "tesoura" && jogador2 === "papel") {
        console.log("Jogador 1 venceu");
    } else if (jogador1 === "papel" && jogador2 === "pedra") {
        console.log("Jogador 1 venceu");
    } else {
        console.log("Jogador 2 venceu");
    }
}

// ============================================================
// TESTES
// ============================================================

console.log("=== EX 1 - Tipo de dia ===");
tipoDeDia("domingo");
tipoDeDia("segunda");

console.log("=== EX 2 - Classificação de nota ===");
classificacaoNota(85);
classificacaoNota(45);

console.log("=== EX 3 - Tipo de pedido ===");
tipoDePedido({"tipo": "venda", "valor": 250});

console.log("=== EX 4 - Tipo de dado ===");
tipoDeDado([10, 20, 30]);
tipoDeDado(3.14);
tipoDeDado("123");
tipoDeDado("hello");

console.log("=== EX 5 - Análise de mensagem ===");
analisarMensagem("Tudo bem?");
analisarMensagem("adeus");

console.log("=== EX 6 - Estado do servidor ===");
estadoDoServidor({"status": "ok", "tempo_resposta": 350});
estadoDoServidor({"status": "erro", "tempo_resposta": 50});

console.log("=== EX 7 - Classificação de produto ===");
classificacaoProduto({"categoria": "eletrônico", "preco": 1500});
classificacaoProduto({"categoria": "alimento", "preco": 5});

console.log("=== EX 8 - Operação matemática ===");
operacaoMatematica("divide", 20, 4);
operacaoMatematica("soma", 10, 5);

console.log("=== EX 9 - Processamento de requisição ===");
processarRequisicao({"metodo": "POST", "conteudo": ""});
processarRequisicao({"metodo": "GET", "conteudo": ""});

console.log("=== EX 10 - Pedra, Papel ou Tesoura ===");
pedraPapelTesoura("pedra", "tesoura");
pedraPapelTesoura("papel", "pedra");
pedraPapelTesoura("tesoura", "tesoura");
