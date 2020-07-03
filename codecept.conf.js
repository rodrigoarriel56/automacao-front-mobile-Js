const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require("constants");

exports.config = {
  output: './allure-report/report',
  helpers: {
    Appium: {
      app: '/Users/60003339/WorkspaceArriel/App/app-qa-release0.67.0.apk',
      platform: 'Android',
      host: 'localhost',
      port: 4723,
      desiredCapabilities: {
        automationName: 'uiautomator2',
        deviceName: 'emulador-5554',
        platformVersion: '8'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    "allure":
     {
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
    enabled: true,
    fullPageScreenshots: true,
    screenshotsForAllureReport: true,
    addAttachment: true,  
    },
    screenshotOnFail: {
      enabled: true
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
  tests: './*_test.js',
  name: 'automationMobileJS',
  translation: 'pt-BR'
}