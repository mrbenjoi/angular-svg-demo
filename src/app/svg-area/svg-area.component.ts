import { Component, Input, OnInit } from '@angular/core';
import { Area, Coordinates } from '../Model';

@Component({
  selector: 'app-svg-area',
  templateUrl: './svg-area.component.html',
  styleUrls: ['./svg-area.component.css']
})
export class SvgAreaComponent implements OnInit {

  @Input()
  area?: Area

  constructor() { }

  ngOnInit(): void {
  }

}
