import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../Components/landing-page/landing-page.component'
import { PortalPageComponent } from '../Components/portal-page/portal-page.component'

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'portal',
        component: PortalPageComponent,
    }
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