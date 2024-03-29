import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Xaplanteris';

  person0 = 
  {
      givenName:'Nikos',
      surName:'Xaplanteris',
      age:44,
      email:'foxnks@gmail.com',
      address:'Athens, Greece'
    };
    person1 = 
    {
        givenName:'John',
        surName:'Doe',
        age:45,
        email:'john@gmail.com',
        address:'New York, USA'
      };
}
