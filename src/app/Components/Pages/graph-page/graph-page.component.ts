import { Component, OnInit } from '@angular/core';
import { NodeData } from '../../../Models/NodeData'
import { EdgeData } from '../../../Models/EdgeData'

@Component({
  selector: 'app-graph-page',
  templateUrl: './graph-page.component.html',
  styleUrls: ['./graph-page.component.css']
})
export class GraphPageComponent implements OnInit {

  displayLeftMenu: Boolean;
  graph = {nodes: [], links: []}

  constructor() { }

  ngOnInit(): void {

    let nodes: NodeData[] = [
      {
        id: "first",
        cpf: "1",
        label: 'A',
        nodeType: "person"
      },
      {
        id: "second",
        cpf: "2",
        label: 'B',
        nodeType: "person"
      },
      {
        id: "third",
        cpf: "3",
        label: 'C',
        nodeType: "company"
      }
    ]
    this.graph.nodes = nodes;

    let edges: EdgeData[] = [
      {
        id: 'a',
        source: 'first',
        target: 'second',
        label: 'is parent of'
      },
      {
        id: 'b',
        source: 'first',
        target: 'third',
        label: 'custom label'
      }
    ]
    this.graph.links = edges;
    
  }

  onNodeClick(event){
    console.log(event.cpf);
  }

  createNewGraph(){
    
  }

}
