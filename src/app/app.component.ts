import { Component } from '@angular/core';

// selector tells what the tag needs to be called to call the html component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
