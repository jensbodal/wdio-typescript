import { expect } from 'chai';

describe('Fails in safari', () => {
  it('cannot click anchor tag when trying to select by inner span text', async() => {
    await browser.url('http://localhost:4200');

    const aSpanElement = await $('//a[span[text()="Inner span element"]]');
    await aSpanElement.click();

    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.eq('Google');

    await browser.pause(1000);
  });
})
