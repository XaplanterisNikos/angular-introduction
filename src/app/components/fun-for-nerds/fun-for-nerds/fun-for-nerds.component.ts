import { Component } from '@angular/core';
import { WordInputComponent } from '../word-input/word-input.component';
import { OddLenghtComponent } from '../odd-lenght/odd-lenght.component';
import { EvenLenghtComponent } from '../even-lenght/even-lenght.component';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [WordInputComponent,OddLenghtComponent,EvenLenghtComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent {

  partialOddWord = '';
  partialEvenWord = '';

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onPartialWord(word :string){
    if(word.length % 2 === 0){
      this.partialEvenWord = word;
      this.partialOddWord ='';
    }else{
      this.partialEvenWord = '';
      this.partialOddWord = word;
    }
  }

  onWord(word:string){
    if(word.length % 2 === 0){
        this.evenLengthWords.push(word);
    }else{
      this.oddLengthWords.push(word);
    }

  }
}
