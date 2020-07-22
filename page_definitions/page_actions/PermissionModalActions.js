const { I } = inject();
const permissionModal = require("../page_fragments/PermissionModal.js");

module.exports = {
  permitirOTempoTodo() {
    I.waitForElement(permissionModal.botoes.btnPermitirOTempoTodo, 20);
    I.tap(permissionModal.botoes.btnPermitirOTempoTodo, 0, 0);
  },

  permitirEnquantoUsaOApp() {
    I.waitForElement(permissionModal.botoes.btnPermitirEnquantoUsaOApp, 20);
    I.tap(permissionModal.botoes.btnPermitirEnquantoUsaOApp, 0, 0);
  },

  permitir() {
    I.waitForElement(permissionModal.botoes.btnPermitir, 20);
    I.tap(permissionModal.botoes.btnPermitir, 0, 0);
  },

  naoPermitir() {
    I.waitForElement(permissionModal.botoes.btnNaoPermitir, 20);
    I.tap(permissionModal.botoes.btnNaoPermitir, 0, 0);
  },
};
