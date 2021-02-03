import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonData } from 'src/app/Models/PersonData';
import { PwsApiService } from 'src/app/Services/pws-api.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  loading = true;
  personData: PersonData;
  constructor(private activatedRoute: ActivatedRoute, private pswApi: PwsApiService) { }


  async ngOnInit(): Promise<void> {
    // TODO: Change this to async...
    this.activatedRoute.queryParams.subscribe( async params => {
      let cpf = params["cpf"];
      this.personData = await this.pswApi.GetPersonInformationByCpf(cpf);
      this.loading = false;
    });
  }
}
