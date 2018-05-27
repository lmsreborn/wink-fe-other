import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-instance-status-bar',
  templateUrl: './wink-instance-status-bar.component.html',
  styleUrls: ['./wink-instance-status-bar.component.css']
})
export class WinkInstanceStatusBarComponent implements OnInit {

  barStatus = 'success';
  constructor() { }

  ngOnInit() {
  }

}
