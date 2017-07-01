import { BoomShakalakaPage } from './app.po';

describe('boom-shakalaka App', () => {
  let page: BoomShakalakaPage;

  beforeEach(() => {
    page = new BoomShakalakaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
