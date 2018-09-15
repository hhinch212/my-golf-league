import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'summary',
        loadChildren:
            './summary-results/summary-results.module#SummaryResultsModule'
    },
    {
        path: 'money',
        loadChildren: './money-list/money-list.module#MoneyListModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
