import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProviderService } from '../../services/service-provider.service'


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: Array<ServiceProvider>;

  constructor(
    private spService: ServiceProviderService
  ) {

    this.serviceProviders = this.spService.getServiceProviders();

  }

  ngOnInit() {
  }

}
