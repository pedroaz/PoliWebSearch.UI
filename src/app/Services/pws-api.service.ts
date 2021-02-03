import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PwsApiService {

  // url = "api/GetPersonInformationByCpf/04460838877"
  url = environment.baseUrl + "api/GetPersonInformationByCpf/"

  constructor(private httpClient: HttpClient) { }

  async GetPersonInformationByCpf(cpf: string){
    return await this.httpClient.get(this.url + cpf).toPromise();
  }
}
