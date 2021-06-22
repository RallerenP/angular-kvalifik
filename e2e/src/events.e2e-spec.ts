import { AppPage } from "./app.po";
import { browser, by, element, protractor } from "protractor";

const email = 'entestbruger@rpovlsen.com';
const pass = '123456';
const expectedName = 'Et Navno'

const EC = protractor.ExpectedConditions;

describe('Events section', () => {
  let helper: AppPage;

  beforeEach(async() => {
    helper = new AppPage();

    await browser.waitForAngularEnabled(false);
    await browser.get('/');

    await browser.get('/login')

    await element(by.id('email')).sendKeys(email);
    await element(by.id('password')).sendKeys(pass);
    await element(by.css('.e2e-submit')).click();

    await browser.wait(EC.presenceOf(element(by.css('.e2e-username'))), 10000);


  })

  it('Navigate to events page', async () => {
    await browser.get('/events')

    expect(await element(by.css(".e2e-planned-events")).getText()).toEqual("Planned events");
  })

  it('Create new event', async () => {
    await browser.get('/events')

    await browser.wait(EC.presenceOf(element(by.css('.e2e-passed'))), 10000);

    let planned;
    let passed;

    element.all(by.css('.e2e-planned')).then(function(elemsAfter) {
      planned = elemsAfter.length;
    })

    element.all(by.css('.e2e-passed')).then(function(elemsAfter) {
      passed = elemsAfter.length;
    })

    await element(by.css('#newEventButton')).click();

    const date = new Date();

    await element(by.id('title')).sendKeys('E2E Test');
    await element(by.id('start-date')).sendKeys(`${date.getDate().toString().padStart(2, '0')}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getFullYear()}`);
    await element(by.id('start-time')).sendKeys(`${(date.getHours().toString().padStart(2, '0'))}:${date.getMinutes().toString().padStart(2, '0')}`);
    await element(by.id('end-date')).sendKeys(`${date.getDate().toString().padStart(2, '0')}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getFullYear()}`);
    await element(by.id('end-time')).sendKeys(`${(date.getHours().toString().padStart(2, '0'))}:${(date.getMinutes()+1).toString().padStart(2, '0')}`);
    await element(by.id('photo-url')).sendKeys('https://www.fotolip.com/wp-content/uploads/2016/05/Minions-Meme-7.jpg');
    await element(by.id('location')).sendKeys('E2E Event Location');

    await element(by.css('.e2e-submit')).click();

    await browser.sleep(5000);

    await browser.get('/events')

    await browser.wait(EC.presenceOf(element(by.css('.e2e-passed'))), 10000);

    let planned_1 = (await element.all(by.css('.e2e-planned'))).length
    let passed_1 = (await element.all(by.css('.e2e-passed'))).length

    expect(planned + 1).toEqual(planned_1);
    expect(passed).toEqual(passed_1);
  })
})
