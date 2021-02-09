import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.css']
})
export class PortalPageComponent implements OnInit {

  showLeftMenu: Boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  navigateTo(destination: string){
    this.router.navigateByUrl("/"+destination);
  }

}
