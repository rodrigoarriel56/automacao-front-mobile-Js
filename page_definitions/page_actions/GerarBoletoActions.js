const { I } = inject();

const pageHome = require("../page_objects/PageHome.js");
const pageBoleto = require("../page_objects/PageBoleto.js")

module.exports = {
    selecionaOpcaoDepositoPorBoleto() {
        I.waitForVisible(pageHome.botoes.btnDepositoPorBoleto, 30);
        I.tap(pageHome.botoes.btnDepositoPorBoleto, 0,0);     
    },

    informaValorDoDeposito() {
        I.waitForVisible(pageBoleto.campos.campoValor, 20);
        I.fillField(pageBoleto.campos.campoValor, '25,00'); 
    },

    selecionaOpcaoGerarBoleto() {
        I.waitForVisible(pageBoleto.botoes.btnGerarBoleto, 5);
        I.tap(pageBoleto.botoes.btnGerarBoleto, 0,0) ;
        I.waitForVisible(pageBoleto.textos.txtBoletoGerado, 20);
    }
}