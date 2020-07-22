const pageHome = require("../page_definitions/page_objects/PageHome.js");
const { I } = inject();
const loginActions = require("../page_definitions/page_actions/LoginActions.js");

Given(/que "([^"]*)" acessa a tela de login do app midway/, (_nome) => {
  loginActions.fechaTelaOnboarding();
});

Given(/que el(?:e|a) preenche corretamente seus dados/, () => {
  loginActions.preencheCamposLogin({ cpf: "00592911330", senha: "102030" });
});

When(/el(?:e|a) aciona a opção para entrar/, () => {
  loginActions.selecionaOpcaoLogar();
});

Then("deve ser apresentada a home do app midway", () => {
  I.see(pageHome.textos.txtBemVindo);
});