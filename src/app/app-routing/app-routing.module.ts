import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsPageComponent } from '../Components/Pages/charts-page/charts-page.component';
import { GraphPageComponent } from '../Components/Pages/graph-page/graph-page.component';
import { LandingPageComponent } from '../Components/Pages/landing-page/landing-page.component'
import { PersonPageComponent } from '../Components/Pages/person-page/person-page.component';
import { PortalPageComponent } from '../Components/Pages/portal-page/portal-page.component'
import { SearchPageComponent } from '../Components/Pages/search-page/search-page.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'portal',
        component: PortalPageComponent,
    },
    {
        path: 'search',
        component: SearchPageComponent,
    },
    {
        path: 'person',
        component: PersonPageComponent,
    },
    {
        path: 'charts',
        component: ChartsPageComponent,
    },
    {
        path: 'graphs',
        component: GraphPageComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }