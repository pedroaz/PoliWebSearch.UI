import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  serachTypes: string[];

  selectedSearchType: string;


  constructor() {

    this.serachTypes = [
      'Pessoa - Cpf',
      'Pessoa - Nome',
      'Empresa - Cnpj', 
      'Empresa - Nome'
    ]

   }

  ngOnInit(): void {
  }

}
