import { CounterAppPage } from './app.po';

describe('counter-app App', function() {
  let page: CounterAppPage;

  beforeEach(() => {
    page = new CounterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
