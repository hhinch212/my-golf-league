import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryResultsRoutingModule } from './summary-results-routing.module';
import { SummaryResultsComponent } from './summary-results/summary-results.component';

@NgModule({
  imports: [
    CommonModule,
    SummaryResultsRoutingModule
  ],
  declarations: [SummaryResultsComponent]
})
export class SummaryResultsModule { }
