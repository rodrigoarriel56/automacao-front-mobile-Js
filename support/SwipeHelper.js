const Helper = codecept_helper;

class SwipeHelper extends Helper {
  async swipeHorizontal(
    startPercentage = 20,
    endPercentage = 80,
    duration = 200
  ) {
    const driver = this.helpers["Appium"].browser;
    const { width, height } = await driver.getWindowRect();
    const anchor = height / 2;
    const startPoint = (width * startPercentage) / 100;
    const endPoint = (width * endPercentage) / 100;
    return driver.touchPerform([
      {
        action: "press",
        options: {
          x: startPoint,
          y: anchor,
        },
      },
      {
        action: "wait",
        options: {
          ms: duration,
        },
      },
      {
        action: "moveTo",
        options: {
          x: endPoint,
          y: anchor,
        },
      },
      {
        action: "release",
        options: {},
      },
    ]);
  }
}

module.exports = SwipeHelper;
