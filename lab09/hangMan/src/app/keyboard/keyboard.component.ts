import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
})
export class KeyboardComponent implements OnInit {
  @Input() wordPrimary = '';
  @Input() MAX_TRIES = 6;
  @Input() tries_number = 0;

  @Output() addTries = new EventEmitter<void>();

  word: string[] = [];
  userWord: string[] = [];

  userLetter: string;
  
  tries: string[] = [];

  ngOnInit(): void {
    this.word = this.wordPrimary.toUpperCase().split('');
    this.userWord = this.word.map(() => ' ');
  }

  constructor() {
    this.userLetter = '';
  }

  changeLetter(event: Event) {
    this.userLetter = (event.target as HTMLInputElement).value;
  }

  userTry() {
    const letter = this.userLetter.toUpperCase();
    if (this.tries.includes(letter)) {
      return;
    }

    this.tries.push(letter);

    if (!this.word.includes(letter)) {
      this.addTries.emit();

      this.userLetter = '';
      return;
    }

    this.word.forEach((l, i) => {
      if (l === letter) {
        this.userWord[i] = letter;
      }
    });

    this.userLetter = '';
  }
}
