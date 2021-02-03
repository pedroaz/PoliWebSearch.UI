import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PwsApiService } from 'src/app/Services/pws-api.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private pswApi: PwsApiService) { }


  async ngOnInit(): Promise<void> {
    this.activatedRoute.queryParams.subscribe( async params => {
      let cpf = params["cpf"];
      console.log("CPF: " + cpf)
      let result = await this.pswApi.GetPersonInformationByCpf(cpf);
      console.log("Result: ");
      console.log(result);
    });
  }
}
