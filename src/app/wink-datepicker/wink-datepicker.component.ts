import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wink-datepicker',
  templateUrl: './wink-datepicker.component.html',
  styleUrls: ['./wink-datepicker.component.less']
})
export class WinkDatepickerComponent implements OnInit {

  @Input() placeholderName: string;

  date = null;
  constructor() { }

  ngOnInit() {
  }

}
