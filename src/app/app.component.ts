import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, RendererFactory2, ViewChild } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { FooterComponent } from "./footer/footer.component";
import { NgClass } from '@angular/common';
import { FeatureComponent } from "./feature/feature.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, ServiceComponent, FooterComponent, NgClass, FeatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  private readonly _RendererFactory2 = inject(RendererFactory2).createRenderer(null,null)

  showArrow:boolean = false
  @HostListener('window:scroll') onScroll(){
    let scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      this.showArrow = true
    } else {
      this.showArrow = false
    }
  }
}
