import { Component, ElementRef, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

// Declaracion para rough.js
declare var rough: any;

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})

export class CanvasComponent implements AfterViewInit, OnChanges {
  @ViewChild('itemCanvas', { static: false }) canvas: ElementRef<HTMLCanvasElement> | undefined;

  @Input() step: number = 0;
  private ctx: CanvasRenderingContext2D | null = null;
  roughCanvas: any;


  ngAfterViewInit(): void {
    if (this.canvas) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.roughCanvas = rough.canvas(this.canvas.nativeElement);
      this.drawHangman(this.step);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['step'] && !changes['step'].isFirstChange()) {
      this.drawHangman(this.step);
    }
  }

  drawHangman(step: number): void {
    if (this.canvas && this.ctx) {
      this.ctx?.clearRect(0, 0, this.canvas?.nativeElement.width, this.canvas?.nativeElement.height);


      if (0 <= step){
        this.roughCanvas.line(50, 450, 200, 450); // Base
        this.roughCanvas.line(125, 450, 125, 50);  // Poste vertical
        this.roughCanvas.line(125, 50, 280, 50);   // Poste horizontal
        this.roughCanvas.line(280, 50, 280, 100);  // Cuerda
        this.roughCanvas.circle(280, 140, 40);     // Cabeza
      }
      if (1 <= step){
        this.roughCanvas.line(280, 180, 280, 350); // Cuerpo
      }
      if (2 <= step) {
        this.roughCanvas.line(280, 350, 240, 450); // Pierna izquierda
      }

      if (3 <= step) {
        this.roughCanvas.line(280, 350, 320, 450); // Pierna derecha
      }
      if (4 <= step) {
        this.roughCanvas.line(280, 280, 220, 200); // Brazo izquierdo
      }
      if (5 <= step) {
        this.roughCanvas.line(280, 280, 340, 200); // Brazo derecho
      }
        
      if (6 <= step) {
        this.roughCanvas.circle(280, 140, 40);     // Cabeza
        this.roughCanvas.line(270, 130, 260, 120); // Ojo derecho
        this.roughCanvas.line(260, 130, 270, 120);
        this.roughCanvas.line(290, 130, 300, 120); // Ojo izquierdo
        this.roughCanvas.line(300, 130, 290, 120);
        this.roughCanvas.line(270, 150, 300, 145, { roughness: 4 }); // Boca
        this.roughCanvas.arc(280, 148, 20, 10, 0, 0.6 * Math.PI, true); // Lengua
      }
    }
  }
}
