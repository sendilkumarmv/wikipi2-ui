import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/models/domain-api-models-wrapper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri = 'https://localhost:7154';
  
  constructor(private httpClient: HttpClient) { }

  createAccount(user: IUser) {
    return this.httpClient.post<IUser>(`${this.baseUri}/api/User`, user);
  }
}
