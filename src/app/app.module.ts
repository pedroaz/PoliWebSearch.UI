import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { PortalPageComponent } from './Components/portal-page/portal-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  declarations: [AppComponent, LandingPageComponent, PortalPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
