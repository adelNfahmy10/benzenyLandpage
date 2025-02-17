import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceComponent {
  getAllSlide:any[] = [
    {title:'Service 1', src:'../../assets/image/service-image/service-1.png', desc:"If you are running a business with a lot of vehicles, paying or financing for petrol can get complicated especially with the unstable prices of petrol these day. That's why we have lunched Benzeny to make it easier for the companies to provide petrol for their drivers without any trouble. Top secret technical app seeks saving time and providing the highest level of financial security."},
    {title:'Service 2', src:'../../assets/image/service-image/service-2.png', desc:"Station companies must first have an agreement with Benzeny in order to have Benzeny service in their station. Once Benzeny will give permission to the company to add stations, add station staff etc. After that Benzeny will send a support team to train the station staff Station companies will benefit from Benzeny services as follows"},
    {title:'Service 3', src:'../../assets/image/service-image/service-3.png', desc:"Benzeny will provide daily/weekly/monthly reports to the stations in order to see the sales progress, how much liter was sold today whether it is Diesel,95 or 91.The station company can also view reports of each worker and calculate his sales."},
    {title:'Service 4', src:'../../assets/image/service-image/service-4.png', desc:"The station company will only need one affordable smart phone of any type connected to internet for each station. This will allow the station staff to scan the QR code of the customers and keep track of his daily sales."}
  ]
}
