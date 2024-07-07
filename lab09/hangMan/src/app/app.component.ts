import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasComponent, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly WORD:string = '';

  readonly WORD_LIST = [
    'ANGULAR',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'PROGRAMMING',
    'DEVELOPMENT',
    'COMPONENT',
    'DIRECTIVE',
    'SERVICE',
    'MODULE',
    'ROUTING',
    'LIFE',
    'CYCLE',
    'HTTP',
    'CLIENT',
    'SERVER',
    'DATABASE',
    'QUERY',
    'RESPONSE',
    'REQUEST',
    'OBSERVABLE',
    'SUBSCRIPTION',
    'OPERATOR',
    'FUNCTION',
    'COMPILATION',
    'TRANSPILATION',
    'INTERPRETATION',
  ]

  readonly TITLE = 'Ahorcado';
  readonly MAX_TRIES = 6;
  tries_number = 0;

  constructor() {
    const random = Math.floor(Math.random() * this.WORD_LIST.length);
    this.WORD = this.WORD_LIST[random];
  }

  addTries() {
    this.tries_number += 1;
  }

}
