import {Component} from '@angular/core';
import {DatabaseService} from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-todo';

  constructor(databaseService: DatabaseService) {}
}
