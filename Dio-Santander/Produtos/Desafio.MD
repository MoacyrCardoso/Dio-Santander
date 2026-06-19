Conhecendo os Pilares do Frontend
1 / 2 - Identificação Instantânea de Produtos Financeiros Digitais

 Desafio
Você trabalha na equipe de frontend de uma fintech inovadora que está lançando um novo aplicativo de gestão de produtos financeiros digitais. O app permite que usuários consultem rapidamente o tipo de produto financeiro a partir de um código fornecido por parceiros. Para garantir uma experiência fluida, o sistema precisa identificar corretamente o tipo de produto (cartão de crédito, conta digital, empréstimo ou investimento) a partir de um código simples digitado pelo usuário. Sua tarefa é criar uma função que, ao receber o código do produto, retorne o nome do produto correspondente, garantindo que o usuário saiba exatamente com o que está lidando antes de prosseguir.

Implemente um programa que recebe uma string representando o código de um produto financeiro digital e retorna o nome do produto correspondente, conforme a tabela abaixo. Se o código não corresponder a nenhum produto conhecido, retorne "Produto desconhecido". Os códigos e seus produtos são: "CC" para "Cartao de Credito", "CD" para "Conta Digital", "EMP" para "Emprestimo" e "INV" para "Investimento". Considere que os códigos são sensíveis a maiúsculas e minúsculas e não possuem espaços extras.

Entrada
Uma única string representando o código do produto financeiro digital. Os valores possíveis são "CC", "CD", "EMP", "INV" ou qualquer outro valor não listado.

Saída
Uma única string com o nome do produto correspondente ao código informado, exatamente como especificado, ou "Produto desconhecido" caso o código não seja reconhecido.

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

Entrada	Saída
CC	Cartao de Credito
EMP	Emprestimo
CD	Conta Digital
XYZ	Produto desconhecido


 