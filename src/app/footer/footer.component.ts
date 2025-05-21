import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { AppDownloadComponent } from "../app-download/app-download.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _Router = inject(Router)
  private readonly _ActivatedRoute = inject(ActivatedRoute)

  activeLink: string = 'home';
  sections = [
    { id: 'home', name: 'Home', image:'./assets/image/footer-image/footer-1.png' },
    { id: 'fill', name: 'Fill Fuel', image:'./assets/image/footer-image/footer-6.png' },
    { id: 'about', name: 'About', image:'./assets/image/footer-image/footer-4.png' },
    { id: 'feature', name: 'Features', image:'./assets/image/footer-image/footer-6.png' },
    { id: 'package', name: 'Packages', image:'./assets/image/footer-image/footer-2.png' },
  ];

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
