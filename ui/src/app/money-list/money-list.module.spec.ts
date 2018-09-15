import { MoneyListModule } from './money-list.module';

describe('MoneyListModule', () => {
  let moneyListModule: MoneyListModule;

  beforeEach(() => {
    moneyListModule = new MoneyListModule();
  });

  it('should create an instance', () => {
    expect(moneyListModule).toBeTruthy();
  });
});
