import { NCchallenge2.6Page } from './app.po';

describe('ncchallenge2.6 App', () => {
  let page: NCchallenge2.6Page;

  beforeEach(() => {
    page = new NCchallenge2.6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
