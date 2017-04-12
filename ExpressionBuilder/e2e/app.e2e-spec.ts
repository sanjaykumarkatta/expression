import { ExpressionBuilderPage } from './app.po';

describe('expression-builder App', () => {
  let page: ExpressionBuilderPage;

  beforeEach(() => {
    page = new ExpressionBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
