import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(appRoutes)],
    declarations: [],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
