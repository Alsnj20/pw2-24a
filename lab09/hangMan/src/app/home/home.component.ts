import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words: string[] = ['angular', 'typescript', 'component', 'template', 'service'];
  selectedWord: string = '';
  displayedWord: string[] = [];
  incorrectGuesses: number = 0;
  maxGuesses: number = 6;
  guessedLetters: string[] = [];
  gameOver: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.displayedWord = Array(this.selectedWord.length).fill('_');
    this.incorrectGuesses = 0;
    this.guessedLetters = [];
    this.gameOver = false;
  }

  guessLetter(letter: string) {
    if (this.guessedLetters.includes(letter) || this.gameOver) {
      return;
    }

    this.guessedLetters.push(letter);

    if (this.selectedWord.includes(letter)) {
      for (let i = 0; i < this.selectedWord.length; i++) {
        if (this.selectedWord[i] === letter) {
          this.displayedWord[i] = letter;
        }
      }

      if (!this.displayedWord.includes('_')) {
        this.gameOver = true;
      }
    } else {
      this.incorrectGuesses++;

      if (this.incorrectGuesses >= this.maxGuesses) {
        this.gameOver = true;
      }
    }
  }
}
