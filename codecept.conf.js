exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\MobileJS\\automationMobileJS\\app\\Android\\app-qa-release0.66.0.apk',
      platform: 'Android',
      host: 'localhost',
      port: 4723,
      desiredCapabilities: {
        automationName: 'uiautomator2',
        deviceName: 'emulator-5554',
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
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    "allure": {
      
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'automationMobileJS',
  translation: 'pt-BR'
}