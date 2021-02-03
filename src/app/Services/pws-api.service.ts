import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PwsApiService {

  // url = "api/GetPersonInformationByCpf/04460838877"
  url = environment.baseUrl + "api/GetPersonInformationByCpf/04460838877"

  constructor(private httpClient: HttpClient) { }

  GetPersonInformationByCpf(cpf: string){

    console.log("Is Prod:" + environment.production);
    console.log("URL:" + this.url);

    this.httpClient.get(this.url).subscribe(res => {
      console.log(res);
    });
  }
}
