const { I } = inject();
const loginActions = require("../page_definitions/page_actions/LoginActions.js");
const pageHome = require("../page_definitions/page_objects/PageHome.js");

Given(/que "([^"]*)" acessa a tela de login do app midway/, (_nome) => {
  loginActions.fechaTelaOnboarding();
});

Given(/que el(?:e|a) preenche corretamente seus dados/, async () => {
  const config = await I.readYmlWithName("dados");
  loginActions.preencheCamposLogin({
    cpf: config.login.cpf,
    senha: config.login.senha,
  });
});

When(/el(?:e|a) aciona a opção para entrar/, () => {
  loginActions.selecionaOpcaoLogar();
});

Then("deve ser apresentada a home do app midway", () => {
  I.see(pageHome.textos.txtBemVindo);
});
