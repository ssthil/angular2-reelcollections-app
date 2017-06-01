import { FirstUnitTestPage } from './app.po';

describe('first-unit-test App', () => {
  let page: FirstUnitTestPage;

  beforeEach(() => {
    page = new FirstUnitTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
