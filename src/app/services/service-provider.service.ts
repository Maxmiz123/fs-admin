import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  serviceProviders: Array<ServiceProvider>;

  constructor() {

    this.serviceProviders = [
      {
        name: 'Joe',
        lastName: 'Soap',
        email: 'joe@mail.com',
        cellPhone: 828073593,
        numberOfListings: 5
      },
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        cellPhone: 828073545,
        numberOfListings: 15
      }
    ];

  }

  getServiceProviders(): Array<ServiceProvider> {
    return this.serviceProviders;
  }

}