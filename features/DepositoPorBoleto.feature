# language: pt
Funcionalidade: Boleto Cash In - Conta Pagamento

  @DepositoPorBoletoCP
  Cenario: Validar Boleto Cash In - Conta Pagamento 
  Dado que estou logado na conta midway
  Quando clico em depósito por boleto
  E preencho campo qual o valor do depósito?
  Entao boleto gerado com sucesso 