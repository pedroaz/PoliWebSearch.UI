import { Component, OnInit } from '@angular/core';
import { PersonData } from 'src/app/Models/PersonData';
import { PersonSearchResultData } from 'src/app/Models/PersonSearchResultData';
import { PwsApiService } from '../../../Services/pws-api.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  loading: Boolean = false;
  searchType = "";
  searchInput = "";
  personSerachResult: PersonData[];

  constructor(private pswApi: PwsApiService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  async ngOnInit(){
    // TODO: Change this to async...
    this.activatedRoute.queryParams.subscribe( async params => {
      this.searchType = params["searchType"];

      if(this.searchType == "personName"){
        this.searchForPerson(params["personName"])
      }
    });
  }

  setSearchType(type: string){
    this.searchType = type;
  }

  changeUrlSearchForPerson(){
    this.router.navigateByUrl("/search?searchType=personName&personName="+this.searchInput)
  }

  async searchForPerson(personName: string){
    console.log("Searching for " + personName);
    this.personSerachResult = await (await this.pswApi.SearchPersonByName(personName)).people;
    console.log(this.personSerachResult);
  }

  onChangeSearchInput(event) {
    this.searchInput = event.target.value;
  }

  inspectPerson(cpf: string){
    this.router.navigateByUrl("/person?cpf=" + cpf)
  }

}
