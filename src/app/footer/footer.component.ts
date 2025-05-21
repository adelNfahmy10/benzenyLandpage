import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AppDownloadComponent } from "../app-download/app-download.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  activeLink: string = 'home';
  sections = [
    { id: 'home', name: 'Home', image:'./assets/image/home.png' },
    { id: 'about', name: 'About', image:'./assets/image/about-us.png' },
    { id: 'service', name: 'Service', image:'./assets/image/service.png' },
    { id: 'feature', name: 'Features', image:'./assets/image/feature.png' },
    // { id: 'contact', name: 'Contact Us', image:'./assets/image/contact-us.png' },
  ];

  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    }
  }



}
