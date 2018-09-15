import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        HomeRoutingModule,
        LayoutModule,

        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: []
})
export class HomeModule {}
