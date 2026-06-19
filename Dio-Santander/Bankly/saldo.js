// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Lê a linha de entrada do usuário. Suporta ambiente DIO (`gets`) ou
// fallback para argumentos de linha de comando quando executado localmente.
const entradaRaw =
    typeof gets === "function" ? gets() : process.argv.slice(2).join(" ") || "";
const entrada = entradaRaw.trim();

// Validação básica
if (!entrada) {
    print(
        "Entrada vazia. Formato esperado: Nome,valor (ex: João,1000 ou João 10.00)",
    );
} else {
    const usarVirgula = entrada.includes(",");
    const partes = usarVirgula ? entrada.split(",") : entrada.split(/\s+/);
    const nome = partes[0] ? partes[0].trim() : "";
    const valorPart = usarVirgula ?
        partes.slice(1).join(",").trim() :
        partes.slice(1).join(" ").trim();

    if (!nome) {
        print("Entrada inválida: nome ausente.");
    } else if (!valorPart) {
        print("Entrada inválida: valor ausente.");
    } else {
        // Normaliza (remove espaços e aceita vírgula como separador decimal)
        const valorNormalized = valorPart.replace(/\s+/g, "").replace(",", ".");

        let saldoCentavos = null;
        // Aceita inteiros (centavos) ou números com até 2 casas decimais (reais)
        if (/^-?\d+$/.test(valorNormalized)) {
            // valor já em centavos
            saldoCentavos = parseInt(valorNormalized, 10);
        } else if (/^-?\d+(\.\d{1,2})?$/.test(valorNormalized)) {
            // valor em reais (possui ponto decimal)
            saldoCentavos = Math.round(parseFloat(valorNormalized) * 100);
        }

        if (saldoCentavos === null || Number.isNaN(saldoCentavos)) {
            print("Entrada inválida: valor numérico esperado (centavos ou reais).");
        } else {
            const saldoReal = (saldoCentavos / 100).toFixed(2).replace(".", ",");
            print(`Bem-vindo, ${nome}! Seu saldo é R$${saldoReal}`);
        }
    }
}