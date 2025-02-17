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
  navbarTop:string = '35px'
  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;  // Get the current scroll position

    // Change the width of the navbar based on the scroll position
    if (scrollPosition > 200) {
      this.navbarWidth = '100%';  // When scrolled more than 100px, reduce width
      this.navbarLeft = '0';  // When scrolled more than 100px, reduce width
      this.navbarTop = '0';  // When scrolled more than 100px, reduce width
    } else {
      this.navbarWidth = '70%'; // When at the top, keep it full width
      this.navbarLeft = '15%';  // When scrolled more than 100px, reduce width
      this.navbarTop = '35px';  // When scrolled more than 100px, reduce width
    }
  }
}
