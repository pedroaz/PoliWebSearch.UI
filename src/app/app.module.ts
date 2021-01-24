
// Angular
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

// Routing
import { AppRoutingModule } from './app-routing/app-routing.module';

// Components
import { LandingPageComponent } from './Components/Pages/landing-page/landing-page.component';
import { PortalPageComponent } from './Components//Pages/portal-page/portal-page.component';

// Primeng
import { ButtonModule } from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { GraphPageComponent } from './Components/Pages/graph-page/graph-page.component';
import { SearchPageComponent } from './Components/Pages//search-page/search-page.component';
import { ChartsPageComponent } from './Components/Pages/charts-page/charts-page.component';
import { InspectPageComponent } from './Components/Pages//inspect-page/inspect-page.component';
import { PortalTopMenuComponent } from './Components/portal-top-menu/portal-top-menu.component';
import { FieldsetModule, } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PortalPageComponent,
    GraphPageComponent, 
    SearchPageComponent, 
    ChartsPageComponent, 
    InspectPageComponent, 
    PortalTopMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    InputTextModule,
    FieldsetModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
