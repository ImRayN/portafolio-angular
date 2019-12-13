import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioItemComponent } from './pages/portfolio-item/portfolio-item.component';

const app_routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio-item', component: PortfolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
    

];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}