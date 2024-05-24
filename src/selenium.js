const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
 
function buildChromeDriver(headless) {
  let options = new chrome.Options();
 
  // chrome in full screen
  //options.addArguments('start-fullscreen'); // no use if headless
 
  // disable top area of chrome
  //options.addArguments('disable-infobars');
 
  // chrome runs without GUI
  if (headless) {
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.addArguments('disable-software-rasterizer');
  }
 
  // Avoids "'Do you want chrome to save your password" pop up
  options.setUserPreferences({credentials_enable_service: false});
 
  return new Builder().setChromeOptions(options).forBrowser('chrome').build();
}
 
/*
async function main() {
  let isHeadless = false;
 
  let driver = buildChromeDriver(isHeadless);
 
  driver.get('https://library-app.firebaseapp.com');
 
  // enter email
  driver.findElement(By.css('input')).sendKeys('test@test.dk');
 
  // click submit button
  let button = driver.findElement(By.css('.btn-primary'));
  driver.wait(() => button.isEnabled());
  button.click();
 
  // get reply message
  await driver.wait(until.elementLocated(By.css('.alert-success')));
  let msg = await driver.findElement(By.css('.alert-success')).getText();
  console.log("Message: " + msg);
 
  // pause for 10 secs (to look at the browser, if it is not headless!)
  if (!isHeadless)
    await driver.sleep(10 * 1000);
  // closes the browser
  driver.quit();
}
 
main();
*/
 
/*
describe('Selenium test', function() {
  // browser tests take longer than normal unit tests
  this.timeout(60 * 1000); // this.timeout() kan ikke kaldes hvis arrow-funktion!
 
  let driver;
 
  beforeEach(() => {
    driver = buildChromeDriver(false); // true: headless
    driver.get('https://library-app.firebaseapp.com');
  });
 
  afterEach(() => {
    driver.quit();
  });
 
  it('can register on page', async () => {
    // enter email
    driver.findElement(By.css('input')).sendKeys('test@test.dk');
    // click submit button
    let button = driver.findElement(By.css('.btn-primary'));
    driver.wait(() => button.isEnabled());
    button.click();
    // get reply message
    await driver.wait(until.elementLocated(By.css('.alert-success')));
    let msg = await driver.findElement(By.css('.alert-success')).getText();
    //console.log("Message: " + msg);
 
    assert(msg.startsWith("Thank you!"));
    //assert(msg.startsWith("Go away!"));
  });
});
*/
 
/*
* rent Mocha eksempel uden Selenium
*/
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
 
    it('should return 1 when the value is 2', () => {
      assert.strictEqual([1, 2, 3].indexOf(2), 1);
    });
  });
});