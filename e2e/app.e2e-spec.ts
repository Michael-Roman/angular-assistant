import { AngularAssistantPage } from './app.po';

describe('angular-assistant App', function() {
  let page: AngularAssistantPage;

  beforeEach(() => {
    page = new AngularAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
