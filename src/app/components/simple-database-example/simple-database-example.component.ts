import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';


@Component({
  selector: 'app-simple-database-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-database-example.component.html',
  styleUrl: './simple-database-example.component.css'
})
export class SimpleDatabaseExampleComponent {
  manyperson = ManyPerson;
}
