import { MediaHelpPage } from './app.po';

describe('media-help App', function() {
  let page: MediaHelpPage;

  beforeEach(() => {
    page = new MediaHelpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
