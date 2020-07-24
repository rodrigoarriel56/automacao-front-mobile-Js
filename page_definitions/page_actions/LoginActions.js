const { I } = inject();
const pageLogin = require("../page_objects/PageLogin.js");
const pageHome = require("../page_objects/PageHome.js");
const pageOnboarding = require("../page_objects/onboarding/PageOnboarding.js");

module.exports = {
  fechaTelaOnboarding() {
    I.waitForElement(pageOnboarding.botoes.btnAbrirMinhaContaMidway, 20);
    I.tap(pageOnboarding.botoes.btnFecharOnboarding, 0, 0);
    I.waitForElement(pageLogin.botoes.btnNotificacao, 5);
    I.tap(pageLogin.botoes.btnNotificacao, 0, 0);
    I.waitForElement(pageLogin.botoes.btnEntrar, 20);
    I.tap(pageLogin.botoes.btnEntrar, 0, 0);
  },

  preencheCamposLogin(dados) {
    I.fillField(pageLogin.campos.campoCpf, dados.cpf);
    I.waitForElement(pageLogin.botoes.btnContinuar, 50);
    I.tap(pageLogin.botoes.btnContinuar);
    I.waitForElement(pageLogin.campos.campoSenha, 20);
    I.fillField(pageLogin.campos.campoSenha, dados.senha);
  },

  selecionaOpcaoLogar() {
    I.waitForElement(pageLogin.botoes.btnEntrar);
    I.tap(pageLogin.botoes.btnEntrar);
    I.waitForElement(pageHome.textos.txtBemVindo, 30);
  },
};
