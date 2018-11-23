
const {webdriver, Builder, By, Key, until} = require('selenium-webdriver')
const { test }  = require('selenium-webdriver/testing')
const { assert } = require('assert')
const { expect } = require('chai')

  
  describe('Enter Gestionix Portal', function() {
    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    it('Enter Page Gestionix', async function () {
      await driver.get("https://gestionix.com/");

      const loginLink = await driver.findElement(By.className('login')).click();

    }
  )
  after(async function() { await driver.quit()});
});

  describe('Login Gestionix Portal', function() {
      before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
      });

      it('Enter Page Gestionix', async () => {
        await driver.get("https://gestionix.com/");

        const loginLink = await driver.findElement(By.className('login')).click();
         await driver.findElement(By.name('Email')).sendKeys('demo@gestionix.com');
         await driver.findElement(By.name('UserPassword')).sendKeys('demo');
         await driver.findElement(By.id('Login')).click();
         expect(loginLink).to.equal(null); 
      });

    after(async function() { });
  });