const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require("constants");

exports.config = {
  output: "./allure-report/report",
  helpers: {
    Appium: {
      app: `${process.env.PWD}/app/Android/app-mtest-release.apk`,
      platform: "Android",
      host: "localhost",
      port: 4723,
      desiredCapabilities: {
        automationName: "uiautomator2",
        deviceName: "d2e3f53a",
        platformVersion: "10",
      },
    },
    SwipeHelper: {
      require: "./support/SwipeHelper.js",
    },
    CPFHelper: {
      require: "./support/CpfHelper.js",
      comPontos: true
    },
  },
  include: {
    I: "./steps_file.js",
  },

  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],

  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./step_definitions/SaldoSteps.js",
      "./step_definitions/LoginSteps.js",
      "./step_definitions/ExtratoSteps.js",
      "./step_definitions/DepositoPorBoletoSteps.js",
      "./step_definitions/TransferenciaMidwaySteps.js",
      "./step_definitions/TransferenciaOutrosBancosSteps.js",
      "./step_definitions/EncerramentoContaPagSteps.js",
      "./step_definitions/onboarding/ContaPagamentoStep.js",
    ],
  },

  plugins: {
    allure: {
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
      enabled: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
      addAttachment: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    addAttachment: {
      name: SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG,
      content: true,
    },
    addEnvironment: {
      name: true,
      value: true,
    },
  },
  tests: "./*_test.js",
  name: "automationMobileJS",
  // translation: "pt-BR",
};
