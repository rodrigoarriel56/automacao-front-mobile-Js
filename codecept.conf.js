exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/60003350/WorkSpaceMidway/Projetos/AutomationMobileJS/app/Android/app-qa-release0.67.0.apk',
      platform: 'Android',
      host: 'localhost',
      port: 4723,
      desiredCapabilities: {
        automationName: 'uiautomator2',
        deviceName: 'd2e3f53a',
        platformVersion: '9'
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
    steps: ['./step_definitions/ExtratoSteps.js']  
  },
  plugins: {
    "allure":
     {
    fullPageScreenshots: true,
    screenshotsForAllureReport: false,  
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'automationMobileJS',
  translation: 'pt-BR'
}