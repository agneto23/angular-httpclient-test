import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  apiURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public createUser(user: User){
    return this.httpClient.post(`${this.apiURL}/createUser/`,user);
  }

  public getUserById(id: number){
    return this.httpClient.get(`${this.apiURL}/user/${id}`);
  }

  public getUsers(){

    return this.httpClient.get<User[]>(`${this.apiURL}/users`);
  }

}
