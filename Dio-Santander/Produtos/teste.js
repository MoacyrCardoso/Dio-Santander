// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Mapeamento dos códigos para os nomes dos produtos financeiros digitais
const produtos = {
    CC: "Cartao de Credito",
    CD: "Conta Digital",
    EMP: "Emprestimo",
    INV: "Investimento",
};

// Lê o código do produto digitado pelo usuário
const codigo = gets();

// TODO: Buscar o nome do produto correspondente ao código informado, ou "Produto desconhecido" se não existir
// Dica: Use o objeto produtos para procurar o código e forneça um valor padrão caso não seja encontrado.

const nomeProduto = produtos[codigo] ? ? "Produto desconhecido";

// Imprime o resultado para o usuário
print(nomeProduto);