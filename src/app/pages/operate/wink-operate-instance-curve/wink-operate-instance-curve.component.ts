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
          title: 'CheckpointSize',
          info: '衡量整个Job每次做checkpoint时占用的存储空间大小'
        },
        {
          title: 'checkpointAlignmentTime',
          info: '衡量一段时间内每个Vertex做checkpoint对齐的时间（最大值）'
        },
        {
          title: 'checkpointCount',
          info: '衡量整个Job的checkpoint个数'
        },
        {
          title: 'Get',
          info: '衡量一段时间内每个subtask操作rocksdb的时间（最大值）'
        },
        {
          title: 'Put',
          info: '衡量一段时间内每个subtask操作rocksdb的时间（最大值）'
        },
        {
          title: 'Seek',
          info: '衡量一段时间内每个subtask操作rocksdb的时间（最大值）'
        },
        {
          title: 'State Size',
          info: '衡量整个Job内部state存储的大小，如果增长过快则有问题'
        },
        {
          title: 'GMS GC Time',
          info: '衡量运行Job的底层container在GC上耗费的时间'
        },
        {
          title: 'GMS GC Rate',
          info: '衡量运行Job的底层container进行GC的频率'
        },
        {
          title: 'WaterMark Delay',
          info: 'WaterMark 距离系统时间的差值'
        }
      ]
    };

  delayPanel =
    {
      header: 'Delay',
      isActive: false,
      charts: [
        {
          title: 'Source SubTask 最大延迟 Top 15',
          info: 'Source SubTask 最大延迟 Top 15'
        },
        {
          title: '读TT延迟',
          info: '读TT延迟'
        }
      ]
    };

  throughputPanel =
    {
      header: 'Throughput',
      isActive: false,
      charts: [
        {
          title: 'Task Input TPS',
          info: 'Task Input TPS'
        },
        {
          title: 'Task Output TPS',
          info: 'Task Output TPS'
        }
      ]
    };


  queuePanel =
    {
      header: 'Queue',
      isActive: false,
      charts: [
        {
          title: 'Input Queue Usage',
          info: 'Input Queue Usage'
        },
        {
          title: 'Output Queue Usage',
          info: 'Output Queue Usage'
        }
      ]
    };

  tracingPanel =
    {
      header: 'Tracing',
      isActive: false,
      charts: [
        {
          title: 'Time Used In Processing Per Second',
          info: 'Time Used In Processing Per Second'
        },
        {
          title: 'Time Used In Waiting Oputput Per Second',
          info: 'Time Used In Waiting Oputput Per Second'
        },
        {
          title: 'TaskLatency Histogram Mean',
          info: 'TaskLatency Histogram Mean'
        },
        {
          title: 'WaitOutput Histogram Mean',
          info: 'WaitOutput Histogram Mean'
        },
        {
          title: 'WaitInput Histogram Mean',
          info: 'WaitInput Histogram Mean'
        },
        {
          // TODO: echarts 分页
          title: 'PartitionLatency Mean',
          info: 'PartitionLatency Mean'
        }
      ]
    };


  processPanel =
    {
      header: 'Process',
      isActive: false,
      charts: [
        {
          title: 'Process MEM Rss',
          info: 'Process MEM Rss'
        },
        {
          title: 'CPU Usage',
          info: 'CPU Usage'
        }
      ]
    };

  jvmPanel =
    {
      header: 'JVM',
      isActive: false,
      charts: [
        {
          title: 'Memory Heap Used',
          info: 'Memory Heap Used'
        },
        {
          title: 'Memory NonHeap Used',
          info: 'Memory NonHeap Used'
        },
        {
          title: 'Threads Count',
          info: 'Threads Count'
        },
        {
          title: 'GC(CMS)',
          info: 'GC(CMS)'
        }
      ]
    };




  constructor() {
  }

  ngOnInit() {
  }

}
