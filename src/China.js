import React, { Component } from 'react';
import './charts.css';
import axios from 'axios';
import { getChina } from './Service.js';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class China extends Component {
	 state = {
	    area: [],
	    areaData: [],
	}
	
	  
	
	componentDidMount(){
	    var myChart = echarts.init(document.getElementById('main'),'light');
		var chartData = [18,28,15,6,17,8,8,28,15,6,17];
         var chartName = ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','阳光新城幼儿园','阳光新城幼儿园','阳光新城幼儿园','阳光新城幼儿园', '汤沐景苑幼儿园', '张寨镇新星幼儿园','朱寨镇新思路幼儿园','朱寨镇燕牌坊幼儿园','龙固镇春龙佳源幼儿园','任庄幼儿园'];
         var unit='万元';


		
	    // 绘制图表
	    myChart.setOption({
	   title: {
        text: '单位:  '+unit,
        right:0,
        textStyle: {
            color: '#000',
            fontSize:14,
        }
    },
  
    backgroundColor: '#fff',
    grid: {
        left: '2%',
        right: '10%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },

    series: [

        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            z: 2,
            
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontSize: 25,
                        fontWeight: 'bold'
                    },
                    position: 'right',
                    formatter: function(data) {
                        return (chartData[data.dataIndex]);
                    }
                }
            },
            data: chartData,
        },
        //年份
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: '-100%',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-20'],
                    textStyle: {
                        fontSize:14,
                        color: '#333',
                    },
                    formatter: function(data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: chartData
        }
    ]
	      });
	
		  
	  }
	render() {
        	
	    return (
			<div id="main" style={{ width: 1150, height: 600 }}> </div>
		
  
	    )
	}
}

export default China;