import { Component, OnInit } from '@angular/core';

// links all these files to this component
//* a decorator function that specifies the angular metadata for the component
@Component({
  // tag to put anywhere in html
  selector: 'app-heroes',
  // template: '<h1>Hello</h1>',  -- puts html right here
  // ↓ links this file to the hero component HTML (so when we call these files using the selector for the tag it runs that html)
  templateUrl: './heroes.component.html',
  // ↓ links this css
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';

  constructor() { }

  // runs when initalized
  ngOnInit(): void {
  }

}
