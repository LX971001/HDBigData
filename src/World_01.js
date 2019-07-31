import React, { Component } from 'react';
import './charts.css';
import './js/world.js';
import { getChina } from './Service.js';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class World_01 extends Component {
	
	  
	
	componentDidMount(){
	      // 基于准备好的dom，初始化echarts实例
		  
	      var myChart = echarts.init(document.getElementById('main'),'light');
		


		  
	      // 绘制图表
	      myChart.setOption({
	   title: {  
                
                
                sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',  
                left: 'center',  
                top: 'top'  
            },  
           /* tooltip: {  
                trigger: 'item',  
                formatter: function (params) {  
                    var value = (params.value + '').split('.');  
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')  
                            + '.' + value[1];  
                    return params.seriesName + '<br/>' + params.name + ' : ' + value;  
                }  
            },*/       
            visualMap: {  
                min: 0,  
                max: 50000,  
                text:['High','Low'],  
                realtime: false,  
                calculable: true,  
                color: ['orangered','yellow','lightskyblue']  
            },  
            series: [  
                {  
                    name: 'World Movies',  
                    type: 'map',  
                    mapType: 'world',  
                    roam: true,  
                    itemStyle:{  
                        emphasis:{label:{show:true}}  
                    },  
                    data: [  
                  
                    {name: 'Argentina', value: 1248},  
                    {name: 'Australia', value: 1492},  
                    {name: 'Austria', value: 777},  
                    {name: 'Belgium', value: 1386},  
            
                    {name: 'Brazil', value: 971},  
                  
                    {name: 'Canada', value: 4611},  
                    {name: 'Switzerland', value: 1303},  
                    {name: 'China', value: 25192},  
                  
                    {name: 'Germany', value: 5533},  
                    
                    {name: 'Denmark', value: 1158},  
                   
                   
                    {name: 'Spain', value: 4089},  
                 
                    {name: 'France', value: 12105},  
                    {name: 'United States', value: 46712},  
                    {name: 'United Kingdom', value: 10527},  
                 
                    {name: 'India', value: 1988},  
                  
                    {name: 'Italy', value: 6065},  
                   
                    {name: 'Japan', value: 14427},  
                 
                    {name: 'South Korea', value: 4678},  
                  
                    {name: 'Mexico', value: 1237},  
                 
                    {name: 'Netherlands', value: 1128},  
                   
                    {name: 'Poland', value: 1211},  
                  
                  
                    {name: 'Russia', value: 1248},  
                   
                    {name: 'Sweden', value: 1265},  
                   
                    {name: 'Thailand', value: 680},  
                  
                    ] 
                }  
            ]

	      });
	
		  
	  }
	render() {
        	
	    return (
			<div id="main" style={{ width: 1200, height: 600 }}> </div>
		
  
	    )
	}
}

export default World_01;