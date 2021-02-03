import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment/environment'

@Injectable({
  providedIn: 'root'
})
export class PwsApiService {

  // url = "api/GetPersonInformationByCpf/04460838877"
  url = environment.baseUrl + "api/GetPersonInformationByCpf/04460838877"

  constructor(private httpClient: HttpClient) { }

  GetPersonInformationByCpf(cpf: string){
    this.httpClient.get(this.url).subscribe(res => {
      console.log(res);
    });
  }
}
