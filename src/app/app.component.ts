import { Component } from '@angular/core';
import { Area, Coordinates } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  area: Area

  constructor() {
    this.area = new Area()
    this.area.coordinates = [
      new Coordinates(50, 40),
      new Coordinates(40, 20),
      new Coordinates(10, 10),
      new Coordinates(10, 30),
      new Coordinates(40, 30),
    ]
  }

}
