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

  cpf: string;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( params => {
      this.cpf = params["cpf"];
      this.pswApi.GetPersonInformationByCpf(this.cpf);
    });
  }

}
