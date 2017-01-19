import { BackpackPage } from './app.po';

describe('backpack App', function() {
  let page: BackpackPage;

  beforeEach(() => {
    page = new BackpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
