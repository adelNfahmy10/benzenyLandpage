import { isPlatformBrowser, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle, NgClass, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  navbarWidth:string = '75%'
  navbarLeft:string = '12.5%'
  navbarTop:string = '15px'
  lastScrollTop = 0;
  isNavbarVisible = true;

  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      this.navbarWidth = '100%';
      this.navbarLeft = '0';
      this.navbarTop = '0';
    } else {
      this.navbarWidth = '75%';
      this.navbarLeft = '12.5%';
      this.navbarTop = '15px';
    }

    if (scrollPosition > this.lastScrollTop) {
      if(this.lastScrollTop > 200){
        this.navbarTop = '-100px';
      }
    } else {
      if(this.lastScrollTop > 200){
        this.navbarTop = '0';
      } else {
        this.navbarTop = '15px';
      }
    }

    this.lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
  }


  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'service', name: 'Service' },
    { id: 'feature', name: 'Features' },
    { id: 'contact', name: 'Contact Us' },
  ];
  activeLink: string = 'home';

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    }
  }

  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeLink = entry.target.id;
            }
          });
        },
        { threshold: 0.5 }
      );

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }
  }
}
