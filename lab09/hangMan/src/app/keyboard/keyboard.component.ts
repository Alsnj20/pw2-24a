import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  @Output() letterSelected = new EventEmitter<string>();

  selectLetter(letter: string): void {
    this.letterSelected.emit(letter);
  }
}
