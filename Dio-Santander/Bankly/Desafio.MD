Desafio
Você foi contratado como desenvolvedor frontend para um novo app bancário digital chamado Bankly. Sua primeira missão é criar uma interface simples que exibe o nome do usuário e o saldo da conta de forma amigável. O time de UX definiu que, ao receber o nome do usuário e o saldo em centavos, a interface deve mostrar uma mensagem personalizada de boas-vindas, seguida do saldo formatado em reais com duas casas decimais. Por exemplo, se o usuário se chama "Lucas" e tem 12345 centavos, a mensagem deve ser: "Bem-vindo, Lucas! Seu saldo é R$123,45".

Implemente uma função que receba uma string com o nome do usuário e um número inteiro representando o saldo em centavos, separados por um espaço. Sua função deve retornar a mensagem de boas-vindas no formato especificado. Considere que o nome não terá espaços e o saldo será sempre um número inteiro não negativo. Não utilize bibliotecas externas para formatação.

Entrada
Uma única linha contendo o nome do usuário (string sem espaços) seguido de um espaço e o saldo em centavos (inteiro não negativo).

Saída
Uma única linha com a mensagem: "Bem-vindo, [nome]! Seu saldo é R$[valor]", onde [valor] é o saldo convertido para reais, com duas casas decimais e vírgula como separador decimal.

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

Entrada Saída
Lucas 12345 Bem-vindo, Lucas! Seu saldo é R$123,45
Maria 0 Bem-vindo, Maria! Seu saldo é R$0,00
Joao 7 Bem-vindo, Joao! Seu saldo é R$0,07
Ana 100 Bem-vindo, Ana! Seu saldo é R$1,00
