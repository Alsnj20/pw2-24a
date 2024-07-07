import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HangGameService {
  words = ["hola", "mundo", "javascript", "programacion", "teclado", "monitor", "mouse", "ventana", "puerta"];
  attemp = 7;
  step = 0;
  wordSearch: string = '';
  wordActually: string = '';

  constructor() { }

  randomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
  }

  whiteSpace(word: string) {
    let wordSpace = '';
    for (let i = 0; i < word.length; i++) {
      wordSpace += '_';
    }
    return wordSpace;
  }

  resetWord(word: string) {
    return word.split(' ').join(' ');
  }

  startGame() {
    this.resetGame();
    this.wordSearch = this.randomWord();
    this.wordActually = this.whiteSpace(this.wordSearch);
  }

  resetGame() {
    this.wordSearch = '';
    this.wordActually = '';
    this.attemp = 7;
    this.step = 0;
  }

  checkWord(word: string, wordActually: string, letter: string) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newWord += letter;
      } else if (wordActually[i] === word[i]) {
        newWord += word[i];
      } else {
        newWord += '_';
      }
    }
    return newWord;
  }

  updateAttemp() {
    this.attemp--;
    return this.attemp;
  }

  playGame(value: string){
    if (this.wordSearch.includes(value)) {
      this.wordActually = this.checkWord(this.wordSearch, this.wordActually, value);
      if (this.wordSearch === this.wordActually) {
        return { won: true, wordActually: this.resetWord(this.wordActually) };
      } else {
        return { won: false, wordActually: this.resetWord(this.wordActually) };
      }
    } else {
      this.step++;
      const attemptsLeft = this.updateAttemp();;
      return { won: false, attemptsLeft, step: this.step };
    }
  }
}
