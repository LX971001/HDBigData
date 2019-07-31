import React, { Component } from 'react';
import './charts.css';


import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Asia extends Component {
	
	componentDidMount(){
	      // 基于准备好的dom，初始化echarts实例
		  
	      var myChart = echarts.init(document.getElementById('main'),'light');
		 


		  
	      // 绘制图表
	      myChart.setOption({
	    title: {
        text: '日韩地区电影票房排行'
    },
	    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1220, 2100, 1150, 810, 720, 1100, 130],
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

export default Asia;