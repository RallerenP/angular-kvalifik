import { AppPage } from "./app.po";
import { browser, by, element, protractor } from "protractor";

const email = 'entestbruger@rpovlsen.com';
const pass = '123456';
const expectedName = 'Et Navno'

const EC = protractor.ExpectedConditions;

describe('User section', () => {
  let helper: AppPage;

  beforeEach(async() => {
    helper = new AppPage();

    await browser.waitForAngularEnabled(false);
    await browser.get('/');
  })

  it('Navigate to login page', async () => {
    await browser.get('/login')

    expect(await element(by.css("h1")).getText()).toEqual("Login");
    await element(by.id('email')).sendKeys(email);
    await element(by.id('password')).sendKeys(pass);
    await element(by.css('.e2e-submit')).click();
    await browser.wait(EC.presenceOf(element(by.css('.e2e-username'))), 10000);

    expect(await element(by.css('.e2e-username')).getText()).toEqual(expectedName);

  })


})
