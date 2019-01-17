import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
// Not used observable and error handling mechanism just beacause api is not working as expected
@Injectable()
export class UserService {
  API_URL = "https://jsonplaceholder.typicode.com/users/";
  constructor(private _http: HttpClient) {}
  getUsers() {
    return this._http.get(`${this.API_URL}`);
  }
  deleteUser(userID) {
    return this._http.delete(`${this.API_URL}${userID}`);
  }
  createUser(user: User) {
    return this._http.post(`${this.API_URL}`, user);
  }
  updateUser(user: User, userID) {
    return this._http.put(`${this.API_URL}${userID}`, user);
  }
  getuserByID(userID) {
    return this._http.get(`${this.API_URL}${userID}`);
  }
}
