import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioItemComponent } from './pages/portfolio-item/portfolio-item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio-item/:cod', component: PortfolioItemComponent },
    { path: 'search/:terminoBusqueda', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' } // Esta es la redirección por defecto si no se le pasa nada por el gato (hashtag)
    

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