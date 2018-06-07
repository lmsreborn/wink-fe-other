import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-checkpoints',
  templateUrl: './wink-operate-instance-checkpoints.component.html',
  styleUrls: ['./wink-operate-instance-checkpoints.component.less']
})
export class WinkOperateInstanceCheckpointsComponent implements OnInit {


  completedCheckpoints = 4465;


  minDuration = 11;
  maxDuration = 389;
  avgDuration = 17;

  constructor() { }

  ngOnInit() {
  }

}
