import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wink-operate-instance-curve',
  templateUrl: './wink-operate-instance-curve.component.html',
  styleUrls: ['./wink-operate-instance-curve.component.less']
})
export class WinkOperateInstanceCurveComponent implements OnInit {

  overviewPanel =
    {
      header: 'Overview',
      isActive: true,
      charts: [
        {
          title: 'FailOver rate',
          info: '衡量当前Job发生failover的频率'
        },
        {
          title: '最小延时',
          info: '衡量数据源的延迟情况，一段时间内的最小值'
        },
        {
          title: '最大时延',
          info: '衡量数据源的延迟情况，一段时间内的最大值'
        },
        {
          title: '平均时延',
          info: '衡量数据源的延迟情况，一段时间内的平均值'
        },
        {
          title: '各Source的TPS数据输入',
          info: '衡量数据源流入的流量，Block粒度（数据源为SLS或TT）'
        },
        {
          title: '各Sink的数据输出',
          info: '衡量向目的数据端流出的流量，Record粒度'
        },
        {
          title: '各Source的RPS数据输入',
          info: '衡量数据源流入的流量，Record粒度（数据源为DataHub时）'
        },
        {
          title: '各Source的数据流量输入',
          info: '衡量数据源流入的流量，Byte粒度'
        },
        {
          title: '各Source的脏数据',
          info: '各Source的脏数据'
        }
      ]
    };

  advancedviewPanel =
    {
      header: 'Advanced View',
      isActive: false,
      charts: [
        {
          title: 'Checkpoint Duration',
          info: '衡量整个Job每次做checkpoint时消耗的时间'
        },
        {
          title: '最小延时',
          info: '衡量数据源的延迟情况，一段时间内的最小值'
        },
        {
          title: '最大时延',
          info: '衡量数据源的延迟情况，一段时间内的最大值'
        },
        {
          title: '平均时延',
          info: '衡量数据源的延迟情况，一段时间内的平均值'
        },
        {
          title: '各Source的TPS数据输入',
          info: '衡量数据源流入的流量，Block粒度（数据源为SLS或TT）'
        },
        {
          title: '各Sink的数据输出',
          info: '衡量向目的数据端流出的流量，Record粒度'
        },
        {
          title: '各Source的RPS数据输入',
          info: '衡量数据源流入的流量，Record粒度（数据源为DataHub时）'
        },
        {
          title: '各Source的数据流量输入',
          info: '衡量数据源流入的流量，Byte粒度'
        },
        {
          title: '各Source的脏数据',
          info: '各Source的脏数据'
        },
        {
          title: '各Source的脏数据',
          info: '各Source的脏数据'
        },
        {
          title: '各Source的脏数据',
          info: '各Source的脏数据'
        },
        {
          title: '各Source的脏数据',
          info: '各Source的脏数据'
        }
      ]
    };

  delayPanel =
    {
      header: 'Overview',
      isActive: true,
      charts: [
        {
          title: 'FailOver rate',
          info: '衡量当前Job发生failover的频率'
        },
        {
          title: '最小延时',
          info: '衡量数据源的延迟情况，一段时间内的最小值'
        }
      ]
    };

  throughputPanel =
    {
      header: 'Overview',
      isActive: true,
      charts: [
        {
          title: 'FailOver rate',
          info: '衡量当前Job发生failover的频率'
        },
        {
          title: '最小延时',
          info: '衡量数据源的延迟情况，一段时间内的最小值'
        }
      ]
    };

  constructor() {
  }

  ngOnInit() {
  }

}
