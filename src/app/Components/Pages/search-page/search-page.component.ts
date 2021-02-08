import { Component, OnInit } from '@angular/core';
import { PersonData } from 'src/app/Models/PersonData';
import { PersonSearchResultData } from 'src/app/Models/PersonSearchResultData';
import { PwsApiService } from '../../../Services/pws-api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  loading: Boolean = false;
  searchType = "";
  personToSearchName = "";
  personSerachResult: PersonData[];

  constructor(private pswApi: PwsApiService, private router: Router) {

  }

  async ngOnInit(){
  }

  setSearchType(type: string){
    this.searchType = type;
  }

  async searchForPerson(){
    if(this.personToSearchName != ""){
      console.log("Searching for " + this.personToSearchName);
      this.personSerachResult = await (await this.pswApi.SearchPersonByName(this.personToSearchName)).people;
      console.log(this.personSerachResult);
    }
  }

  changeSearchInput(event) {
    this.personToSearchName = event.target.value;
  }

  inspectPerson(cpf: string){
    this.router.navigateByUrl("/person?cpf=" + cpf)
  }

}
