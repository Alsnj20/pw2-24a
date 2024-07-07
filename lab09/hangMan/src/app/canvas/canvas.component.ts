import { Component, ElementRef, ViewChild, Input, AfterViewInit, OnChanges } from '@angular/core';

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
  @ViewChild('itemCanvas', {static: false}) canvas: ElementRef<HTMLCanvasElement> | undefined;

  @Input() step: number = 0;
  private ctx: CanvasRenderingContext2D | null = null;
  roughCanvas: any;


  ngAfterViewInit(): void {
    this.ctx = this.canvas ? this.canvas.nativeElement.getContext('2d'): null;
    this.roughCanvas = rough.canvas(this.canvas ? this.canvas.nativeElement : null);
    this.drawHangman(this.step);
  }

  ngOnChanges(): void {
    this.drawHangman(this.step);
  }

  drawHangman(step: number): void {
    this.ctx? this.ctx.clearRect(0, 0, this.canvas ? this.canvas.nativeElement.width : 0 , this.canvas ? this.canvas.nativeElement.height: 0 ): null;

    switch (step) {
      case 0:
        this.roughCanvas.line(50, 450, 200, 450); // Base
        this.roughCanvas.line(125, 450, 125, 50);  // Poste vertical
        this.roughCanvas.line(125, 50, 280, 50);   // Poste horizontal
        this.roughCanvas.line(280, 50, 280, 100);  // Cuerda
        this.roughCanvas.circle(280, 140, 40);     // Cabeza
        break;
      case 1:
        this.roughCanvas.line(280, 180, 280, 350); // Cuerpo
        break;
      case 2:
        this.roughCanvas.line(280, 350, 240, 450); // Pierna izquierda
        break;
      case 3:
        this.roughCanvas.line(280, 350, 320, 450); // Pierna derecha
        break;
      case 4:
        this.roughCanvas.line(280, 280, 220, 200); // Brazo izquierdo
        break;
      case 5:
        this.roughCanvas.line(280, 280, 340, 200); // Brazo derecho
        break;
      case 6:
        this.roughCanvas.circle(280, 140, 40);     // Cabeza
        this.roughCanvas.line(270, 130, 260, 120); // Ojo derecho
        this.roughCanvas.line(260, 130, 270, 120);
        this.roughCanvas.line(290, 130, 300, 120); // Ojo izquierdo
        this.roughCanvas.line(300, 130, 290, 120);
        this.roughCanvas.line(270, 150, 300, 145, { roughness: 4 }); // Boca
        this.roughCanvas.arc(280, 148, 20, 10, 0, 0.6 * Math.PI, true); // Lengua
        break;
    }
  }
}
