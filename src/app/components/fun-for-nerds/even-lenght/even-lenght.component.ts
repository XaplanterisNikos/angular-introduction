import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-lenght',
  standalone: true,
  imports: [],
  templateUrl: './even-lenght.component.html',
  styleUrl: './even-lenght.component.css'
})
export class EvenLenghtComponent {
 @Input() words: string[] =[];
 @Input() partialWord:string = '';
}
