import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = [
      {
        name: 'Max',
        lastName: 'Misrahi',
        email: 'Max@mail.com',
        cellPhone: 98789712
      }
    ];
  }

  getUsers(): Array<User> {
    return this.users;
  }
}
