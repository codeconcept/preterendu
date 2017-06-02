import { PreteRenduPage } from './app.po';

describe('prete-rendu App', () => {
  let page: PreteRenduPage;

  beforeEach(() => {
    page = new PreteRenduPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
