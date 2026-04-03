import { Component, ViewChild, ElementRef,ChangeDetectorRef, Input } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero',
  standalone: true,
  imports: [Pelicula, CommonModule],
  templateUrl: './genero.html',
  styleUrl: './genero.css',
})
export class Genero {

  @Input() genero!: {
    nombre: string;
    peliculas: any[];
    canScrollLeft?: boolean;
    canScrollRight?: boolean;
  };

  @Input() index!: number;



  canScrollLeft = false;
  canScrollRight = true;

  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;


  scrollLeft() {
  const el = this.scrollContainer.nativeElement;

  el.scrollBy({
    left: -300,
    behavior: 'smooth'
  });

  setTimeout(() => this.updateScrollButtons(), 300);
}

scrollRight() {
  const el = this.scrollContainer.nativeElement;

  el.scrollBy({
    left: 300,
    behavior: 'smooth'
  });

  setTimeout(() => this.updateScrollButtons(), 300);
}





  updateScrollButtons() {
  const el = this.scrollContainer.nativeElement;

  this.genero.canScrollLeft = el.scrollLeft > 0;
  this.genero.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;

  this.cdr.detectChanges();
}


  ngAfterViewInit() {
    const el = this.scrollContainer.nativeElement;

    this.updateScrollButtons();

    el.addEventListener('scroll', () => this.updateScrollButtons(), { passive: true });
    el.addEventListener('wheel', () => this.updateScrollButtons(), { passive: true });
    el.addEventListener('touchmove', () => this.updateScrollButtons(), { passive: true });
  }
}
