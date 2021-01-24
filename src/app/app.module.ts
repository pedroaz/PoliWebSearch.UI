import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { PortalPageComponent } from './Components/portal-page/portal-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, PortalPageComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
