import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-page',
  templateUrl: './graph-page.component.html',
  styleUrls: ['./graph-page.component.css']
})
export class GraphPageComponent implements OnInit {

  displayLeftMenu: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onNodeSelect(event){
    console.log(event.id);
  }

}
