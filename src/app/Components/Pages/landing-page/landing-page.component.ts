import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PwsApiService } from 'src/app/Services/pws-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private pwsService: PwsApiService ) { }

  ngOnInit(): void {
  }

  goToPortal(){
    this.router.navigateByUrl("/portal");
  }

  openSwagger(){
    window.open(this.pwsService.GetSwaggerUrl());
  }

  openGithub(){
    window.open("https://github.com/pedroaz/PoliWebSearch");
  }
}
