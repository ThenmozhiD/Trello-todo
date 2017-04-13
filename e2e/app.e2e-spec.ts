import { HipBarPage } from './app.po';

describe('hip-bar App', () => {
  let page: HipBarPage;

  beforeEach(() => {
    page = new HipBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
