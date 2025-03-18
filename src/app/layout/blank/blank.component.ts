import { Component } from '@angular/core';
import { AboutComponent } from "../../about/about.component";
import { ServiceComponent } from "../../service/service.component";
import { FeatureComponent } from "../../feature/feature.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { HomeComponent } from "../../home/home.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [AboutComponent, ServiceComponent, FeatureComponent, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

}
