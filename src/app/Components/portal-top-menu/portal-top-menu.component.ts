import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portal-top-menu',
  templateUrl: './portal-top-menu.component.html',
  styleUrls: ['./portal-top-menu.component.css']
})
export class PortalTopMenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
        {label: 'Portal', icon: 'pi pi-fw pi-home', command: () => this.goToRoute('portal')},
        {label: 'Graph', icon: 'pi pi-fw pi-circle-off', command: () => this.goToRoute('graphs')},
        {label: 'Search', icon: 'pi pi-fw pi-search', command: () => this.goToRoute('search')},
        {label: 'Inspect', icon: 'pi pi-fw pi-info', command: () => this.goToRoute('inspect')},
        {label: 'Charts', icon: 'pi pi-fw pi-chart-bar', command: () => this.goToRoute('charts')}
    ];
  }

  goToRoute(url: string){
    this.router.navigateByUrl(url);
  }

}
