import { DealersappPage } from './app.po';

describe('dealersapp App', function() {
  let page: DealersappPage;

  beforeEach(() => {
    page = new DealersappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
