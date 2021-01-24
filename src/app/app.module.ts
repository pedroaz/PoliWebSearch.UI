
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
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, PortalPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
