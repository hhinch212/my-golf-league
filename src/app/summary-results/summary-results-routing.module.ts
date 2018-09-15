import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryResultsComponent } from './summary-results/summary-results.component';

const routes: Routes = [
    {
        path: '',
        component: SummaryResultsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SummaryResultsRoutingModule {}
