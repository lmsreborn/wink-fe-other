import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-time-range',
  templateUrl: './wink-time-range.component.html',
  styleUrls: ['./wink-time-range.component.less']
})
export class WinkTimeRangeComponent implements OnInit {

  timeValue = 'tenMinutes';
  constructor() { }

  ngOnInit() {
  }

}
