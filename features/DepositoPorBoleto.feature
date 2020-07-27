# language: pt
Funcionalidade: Boleto Cash In - Conta Pagamento
  Como usuário do app Midway
  Karla deseja gerar um boleto a partir de sua conta
  Para que ela possa receber pagamentos e depositos de forma mais rápida e segura

Contexto:
  Dado que "Karla" está logada na conta midway
  
@DepositoPorBoletoCP @Regressivo 
  Cenario: Validar Boleto Cash In - Conta Pagamento 
  E que ela seleciona a opção para depósito por boleto
  Quando ela informa o valor para o deposito
  Entao ela deve ver que o boleto foi gerado com sucesso 