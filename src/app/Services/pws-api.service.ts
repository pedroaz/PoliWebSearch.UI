import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { PersonData } from '../Models/PersonData';
import { PersonSearchResultData } from '../Models/PersonSearchResultData';

@Injectable({
  providedIn: 'root'
})
export class PwsApiService {

  constructor(private httpClient: HttpClient) { }

  async GetPersonInformationByCpf(cpf: string) : Promise<PersonData>{
    let url = environment.baseUrl + "api/GetPersonInformationByCpf/" + cpf;
    return await this.httpClient.get<PersonData>(url).toPromise();
  }

  async SearchPersonByName(name: string) : Promise<PersonSearchResultData>{
    let url = environment.baseUrl + "api/SearchPersonByName/" + name;
    return await this.httpClient.get<PersonSearchResultData>(url).toPromise();
  }

  GetSwaggerUrl(){
    return environment.baseUrl+"api/Swagger/ui/"
  }
}
