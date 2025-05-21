import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-fill-fuel',
  standalone: true,
  imports: [],
  templateUrl: './fill-fuel.component.html',
  styleUrl: './fill-fuel.component.scss'
})
export class FillFuelComponent implements AfterViewInit{
  icons = [
    { class: 'fa-solid fa-people-roof' },
    { class: 'fa-solid fa-satellite' },
    { class: 'fa-solid fa-satellite-dish' },
    { class: 'fa-brands fa-artstation' },
    { class: 'fa-brands fa-fonticons ' },
    { class: 'fa-brands fa-playstation' },
    { class: 'fa-brands fa-paypal' },
    { class: 'fa-brands fa-tiktok' }
  ];

  @ViewChild('iconContainer') iconContainer!: ElementRef;
  @ViewChildren('iconElement', { read: ElementRef }) iconElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const icons = this.iconContainer.nativeElement.querySelectorAll('i') as NodeListOf<HTMLElement>;
    const total = icons.length;
    const radius = 175;

    icons.forEach((icon: HTMLElement, i: number) => {
      const angle = (360 / total) * i;
      const rad = angle * (Math.PI / 180);
      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);

      icon.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}
