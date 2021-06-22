import { AppPage } from "./app.po";
import { browser, by, element, ElementFinder, protractor } from "protractor";

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

  it('Navigate to post page', async () => {
    await browser.get('/posts')

    await browser.wait(EC.presenceOf(element(by.css('.e2e-post-title'))), 10000);

    const titles = await element.all(by.css('.e2e-post-title')).getText()

    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];

      await element(by.id('e2e-search')).clear()
      await element(by.id('e2e-search')).sendKeys(title)
      await browser.sleep(100);

      const filtered = await element.all(by.css('.e2e-post-title')).getText();

      for (let j = 0; j < filtered.length; j++) {
        const filteredTitle = filtered[j];

        expect(filteredTitle).toContain(title);
      }

    }

    console.log(titles)

    // expect(await element(by.css("h1")).getText()).toEqual("Login");
    // await element(by.id('email')).sendKeys(email);
    // await element(by.id('password')).sendKeys(pass);
    // await element(by.css('.e2e-submit')).click();
    // await browser.wait(EC.presenceOf(element(by.css('.e2e-username'))), 10000);

    // expect(await element(by.css('.e2e-username')).getText()).toEqual(expectedName);

  })


})
