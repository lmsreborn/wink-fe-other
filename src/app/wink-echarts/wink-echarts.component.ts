import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wink-echarts',
  templateUrl: './wink-echarts.component.html',
  styleUrls: ['./wink-echarts.component.less']
})
export class WinkEchartsComponent implements OnInit {

  public echartOption: any;

  @Input() title: string;
  @Input() tooltipInfo: string;
  @Input() echartsType: string;

  constructor() {
  }

  ngOnInit() {
    // this.echartOption = {
    //   backgroundColor: '#4040',
    //
    //   // title: {
    //   //   text: 'Customized Pie',
    //   //   left: 'center',
    //   //   top: 20,
    //   //   textStyle: {
    //   //     color: '#ccc'
    //   //   }
    //   // },
    //
    //   visualMap: {
    //     show: false,
    //     min: 80,
    //     max: 600,
    //     inRange: {
    //       colorLightness: [0, 1]
    //     }
    //   },
    //   series: [
    //     {
    //       name: '访问来源',
    //       type: 'pie',
    //       radius: '55%',
    //       center: ['50%', '50%'],
    //       data: [
    //         {value: 335, name: '直接访问'},
    //         {value: 310, name: '邮件营销'},
    //         {value: 274, name: '联盟广告'},
    //         {value: 235, name: '视频广告'},
    //         {value: 400, name: '搜索引擎'}
    //       ].sort(function (a, b) {
    //         return a.value - b.value;
    //       }),
    //       roseType: 'radius',
    //       label: {
    //         normal: {
    //           textStyle: {
    //             color: 'rgba(255, 255, 255, 0.3)'
    //           }
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           lineStyle: {
    //             color: 'rgba(255, 255, 255, 0.3)'
    //           },
    //           smooth: 0.2,
    //           length: 10,
    //           length2: 20
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           color: '#c23531',
    //           shadowBlur: 200,
    //           shadowColor: 'rgba(0, 0, 0, 0.5)'
    //         }
    //       },
    //
    //       animationType: 'scale',
    //       animationEasing: 'elasticOut',
    //       animationDelay: function (idx) {
    //         return Math.random() * 200;
    //       }
    //     }
    //   ]
    // };
    this.echartOption = {

      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },

      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#40a9ff',
          }
        },

        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.5)',
          },
        },
      },


      yAxis: {
        type: 'time',
        show: true,
        data: ['0.20ms', '0.40ms', '0.60ms', '0.80ms', '1.00ms'],
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.5)',
            type: 'dashed'
          },
        },
        axisLine: {
          show: false
        },

        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.65)',
          },
        },
      },
      series: [{
        type: 'line',
        name: '模拟数据',
        tooltip: {

        },
        showSymbol: false,
        hoverAnimation: false,
        data: []
      }]
    };

  }

}
