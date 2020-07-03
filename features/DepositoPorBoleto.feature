# language: pt
Funcionalidade: Depósito por boleto - Conta Pagamento

  @DepositoPorBoletoCP
  Cenario: Gerar Déposito por boleto - Conta Pagamento 
  Dado que estou logado na conta midway
  Quando clico em depósito por boleto
  E preencho campo qual o valor do depósito?
  Entao boleto gerado com sucesso 