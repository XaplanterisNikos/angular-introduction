import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Xaplanteris';

  person ={
    givenName:'Nikos',
    surName:'Xaplanteris',
    age:44,
    email:'foxnks@gmail.com',
  };

}
