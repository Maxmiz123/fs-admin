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
        name: 'Max',
        lastName: 'Misrahi',
        email: 'max@mail.com',
        cellPhone: 99893404,
        numberOfListings: 5
      },
      {
        name: 'George',
        lastName: 'Doe',
        email: 'george@mail.com',
        cellPhone: 828073545,
        numberOfListings: 15
      }
    ];

  }

  getServiceProviders(): Array<ServiceProvider> {
    return this.serviceProviders;
  }

}