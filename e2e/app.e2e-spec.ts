import { CounterAppNg2ReduxPage } from './app.po';

describe('counter-app-ng2-redux App', () => {
  let page: CounterAppNg2ReduxPage;

  beforeEach(() => {
    page = new CounterAppNg2ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
