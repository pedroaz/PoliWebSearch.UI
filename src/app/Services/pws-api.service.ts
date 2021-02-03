import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { PersonData } from '../Models/PersonData';

@Injectable({
  providedIn: 'root'
})
export class PwsApiService {

  // url = "api/GetPersonInformationByCpf/04460838877"
  url = environment.baseUrl + "api/GetPersonInformationByCpf/"

  constructor(private httpClient: HttpClient) { }

  async GetPersonInformationByCpf(cpf: string) : Promise<PersonData>{
    return await this.httpClient.get<PersonData>(this.url + cpf).toPromise();
  }
}
