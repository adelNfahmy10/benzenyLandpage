import { isPlatformBrowser, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle, NgClass, NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _Router = inject(Router)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  navbarTop:string = '0'
  lastScrollTop = 0;
  activeLink: string = '';

  sections = [
    { id: 'home', name: 'Home' },
    { id: 'fill', name: 'Fill Fuel' },
    { id: 'about', name: 'About' },
    { id: 'feature', name: 'Features' },
    { id: 'package', name: 'Packages' },
  ];

  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    if (scrollPosition > this.lastScrollTop) {
      if(this.lastScrollTop > 200){
        this.navbarTop = '-100px';
      }
    } else {
      if(this.lastScrollTop > 200){
        this.navbarTop = '0';
      }
    }

    this.lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
  }


  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    } else {
      this._Router.navigate(['/'], { queryParams: { scrollTo: sectionId } });
    }
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this._ActivatedRoute.queryParams.subscribe(params => {
      const sectionId = params['scrollTo'];
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
      });
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
