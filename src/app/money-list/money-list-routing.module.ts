import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyListComponent } from './money-list/money-list.component';

const routes: Routes = [
    {
        path: '',
        component: MoneyListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoneyListRoutingModule {}
