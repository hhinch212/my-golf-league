import { SummaryResultsModule } from './summary-results.module';

describe('SummaryResultsModule', () => {
  let summaryResultsModule: SummaryResultsModule;

  beforeEach(() => {
    summaryResultsModule = new SummaryResultsModule();
  });

  it('should create an instance', () => {
    expect(summaryResultsModule).toBeTruthy();
  });
});
