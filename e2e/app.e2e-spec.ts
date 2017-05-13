import { ChineeseRecipePage } from './app.po';

describe('chineese-recipe App', function() {
  let page: ChineeseRecipePage;

  beforeEach(() => {
    page = new ChineeseRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cr works!');
  });
});
