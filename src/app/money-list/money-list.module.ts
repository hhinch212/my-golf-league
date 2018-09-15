import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import { MoneyListRoutingModule } from './money-list-routing.module';
import { MoneyListComponent } from './money-list/money-list.component';

@NgModule({
    imports: [
        CommonModule,
        MoneyListRoutingModule,
        AgGridModule.withComponents([]),
        MatCardModule
    ],
    declarations: [MoneyListComponent]
})
export class MoneyListModule {}
