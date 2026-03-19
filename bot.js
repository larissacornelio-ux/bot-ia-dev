const prompt = require("prompt-sync")();

function gerarCodigo(pedido) {
    return `// Código gerado para: ${pedido}
function exemplo() {
    console.log("Função criada!");
}`;
}

function revisarCodigo(codigo) {
    return codigo + "\n// Código revisado e melhorado";
}

const pedido = prompt("O que você quer que o bot crie? ");

const codigoGerado = gerarCodigo(pedido);
const codigoFinal = revisarCodigo(codigoGerado);

console.log("\n=== RESULTADO FINAL ===\n");
console.log(codigoFinal);
