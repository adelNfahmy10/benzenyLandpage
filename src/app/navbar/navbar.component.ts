import { NgClass, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  navbarWidth:string = '70%'
  navbarLeft:string = '15%'
  navbarTop:string = '15px'
  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      this.navbarWidth = '100%';
      this.navbarLeft = '0';
      this.navbarTop = '0';
    } else {
      this.navbarWidth = '70%';
      this.navbarLeft = '15%';
      this.navbarTop = '15px';
    }
  }
  activeLink: string = 'home';
  setActiveLink(link: string) {
    this.activeLink = link;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // التمرير السلس إلى العنصر
    }
  }
}
