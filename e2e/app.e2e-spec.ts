import { HospitalAppPage } from './app.po';

describe('hospital-app App', () => {
  let page: HospitalAppPage;

  beforeEach(() => {
    page = new HospitalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
