const { I } = inject();
 
const loginActions = require("../page_definitions/page_actions/LoginActions.js");
const gerarBoletoActions = require("../page_definitions/page_actions/GerarBoletoActions.js")
const pageBoleto = require("../page_definitions/page_objects/PageBoleto.js")

Given(/que "([^"]*)" está logada na conta midway/, async (_nome) => {
   loginActions.fechaTelaOnboarding();
   const config = await I.readYmlWithName("dados");
   loginActions.preencheCamposLogin({
     cpf: config.login.cpf,
     senha: config.login.senha,
   });
   loginActions.selecionaOpcaoLogar();
 });

 Given(/que el(?:e|a) seleciona a opção para depósito por boleto/, () => {
   gerarBoletoActions.selecionaOpcaoDepositoPorBoleto();
});

When(/el(?:e|a) informa o valor para o deposito/, () => {
   gerarBoletoActions.informaValorDoDeposito();
   gerarBoletoActions.selecionaOpcaoGerarBoleto();
});

Then(/el(?:e|a) deve ver que o boleto foi gerado com sucesso/, () => {
   I.see(pageBoleto.textos.txtCodigoBoleto, 10);
   I.see(pageBoleto.textos.txtComprovante, 5)
});  