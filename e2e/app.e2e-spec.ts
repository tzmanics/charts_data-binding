import { KendouiNg2CensusVisualizationsPage } from './app.po';

describe('kendoui-ng2-census-visualizations App', function() {
  let page: KendouiNg2CensusVisualizationsPage;

  beforeEach(() => {
    page = new KendouiNg2CensusVisualizationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
