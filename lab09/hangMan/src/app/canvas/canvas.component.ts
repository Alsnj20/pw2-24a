import { Component, ElementRef, ViewChild, Input, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})

export class CanvasComponent implements AfterViewInit, OnChanges {
  @ViewChild('itemCanvas', {static: false}) canvas: ElementRef<HTMLCanvasElement> | undefined;

  @Input() step: number = 0;
  private ctx: CanvasRenderingContext2D | null = null;


  ngAfterViewInit(): void {
    this.ctx = this.canvas ? this.canvas.nativeElement.getContext('2d'): null;
    this.drawHangman(this.step);
  }

  ngOnChanges(): void {
    this.drawHangman(this.step);
  }

}
