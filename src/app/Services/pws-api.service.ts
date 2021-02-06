import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { PersonData } from '../Models/PersonData';

@Injectable({
  providedIn: 'root'
})
export class PwsApiService {

  constructor(private httpClient: HttpClient) { }

  async GetPersonInformationByCpf(cpf: string) : Promise<PersonData>{
    let url = environment.baseUrl + "api/GetPersonInformationByCpf/" + cpf;
    return await this.httpClient.get<PersonData>(url).toPromise();
  }

  async SearchPersonByName(name: string) : Promise<PersonData[]>{
    let url = environment.baseUrl + "api/SearchPersonByName/" + name;
    return await this.httpClient.get<PersonData[]>(url).toPromise();
  }
}
