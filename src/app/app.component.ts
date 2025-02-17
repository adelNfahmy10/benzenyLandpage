import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { FooterComponent } from "./footer/footer.component";
import { NgClass } from '@angular/common';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, ServiceComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  showArrow:boolean = false
  @HostListener('window:scroll') onScroll(){
    let scrollPosition = window.scrollY;  // Get the current scroll position
    // Change the width of the navbar based on the scroll position
    if (scrollPosition > 200) {
      this.showArrow = true  // When scrolled more than 100px, reduce width
    } else {
      this.showArrow = false  // When scrolled more than 100px, reduce width
    }
  }
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
