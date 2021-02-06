import { Component, OnInit } from '@angular/core';
import { PwsApiService } from '../../../Services/pws-api.service'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchType = "";
  personToSearchName = "";

  constructor(private pswApi: PwsApiService) {

  }

  ngOnInit(): void {
    
  }

  setSearchType(type: string){
    this.searchType = type;
  }

  async searchForPerson(){
    if(this.personToSearchName != ""){
      let result = await this.pswApi.SearchPersonByName(this.personToSearchName);
      console.log(result.length);
    }
    
  }

}
