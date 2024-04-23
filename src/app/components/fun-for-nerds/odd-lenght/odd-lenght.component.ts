import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-lenght',
  standalone: true,
  imports: [],
  templateUrl: './odd-lenght.component.html',
  styleUrl: './odd-lenght.component.css'
})
export class OddLenghtComponent {
  @Input() words:string[] = [];
  @Input() partialWord:string = '';
}
