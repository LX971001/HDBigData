import React, { Component } from 'react';
import './charts.css';


import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class America extends Component {
	
	componentDidMount(){
	      // 基于准备好的dom，初始化echarts实例
		  
	      var myChart = echarts.init(document.getElementById('main'),'light');
		 


		  
	      // 绘制图表
	      myChart.setOption({
	    title: {
        text: '美国地区电影票房排行'
    },
	    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 20, 134, 80, 70, 120, 130],
        type: 'bar'
    }]
	      });
	
		  
	  }
	render() {
	    return (
			<div id="main" style={{ width: 1000, height: 600 }}></div>
		
  
	    )
	}
}

export default America;