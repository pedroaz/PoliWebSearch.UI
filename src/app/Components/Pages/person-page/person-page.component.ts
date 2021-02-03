import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PwsApiService } from 'src/app/Services/pws-api.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private pswApi: PwsApiService) { }


  async ngOnInit(): Promise<void> {
    // TODO: Change this to async...
    this.activatedRoute.queryParams.subscribe( async params => {
      let cpf = params["cpf"];
      let personData = await this.pswApi.GetPersonInformationByCpf(cpf);
      console.log(personData.candidateName);
    });
  }
}
