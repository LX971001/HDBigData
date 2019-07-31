import React, { Component } from 'react';
import './Rank.css';
import China from './China.js'
import America from './America.js'
import Europe from './Europe.js'
import Asia from './Asia.js'
import World_01 from './World_01'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { postArea, postClass, postMovie } from './Service';
import Navbar from './Navbar';
import axios from 'axios';
import { Input } from 'antd';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class Child_0 extends React.Component {
	
  render() {
   return (
   <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
   )
		
  }
}
class Child_1 extends React.Component {
  render() {
    return (
    <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_2 extends React.Component {
  render() {
    return (
	   <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
		)
		
  }
}
class Child_3 extends React.Component {
  render() {
    return (
       <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_4 extends React.Component {
  render() {
    return (
     <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_5 extends React.Component {
  render() {
    return (
      <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_6 extends React.Component {
  render() {
    return (
      <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_7 extends React.Component {
  render() {
    return (
     <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_8 extends React.Component {
  render() {
    return (
      <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_9 extends React.Component {
  render() {
    return (
     <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_10 extends React.Component {
  render() {
    return (
     <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_11 extends React.Component {
  render() {
    return (
    	  <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_12 extends React.Component {
  render() {
    return (
    	  <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_13 extends React.Component {
  render() {
    return (
      <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_14 extends React.Component {
  render() {
    return (
    	  <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_15 extends React.Component {
  render() {
    return (
      <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_16 extends React.Component {
  render() {
    return (
    		<div id="main" style={{ width: 1000, height: 600 }}> </div>
    )
		
  }
}
class Child_17 extends React.Component {
  render() {
    return (
    	  <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_18 extends React.Component {
  render() {
    return (
    	  <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_19 extends React.Component {
  render() {
    return (
    	  <h style={{fontSize:'20px'}}>	<div id="main" style={{ width: 1000, height: 600 }}> </div></h>
    )
		
  }
}
class Child_20 extends React.Component {
  render() {
    return (
    	<h style={{fontSize:'20px'}}>当日票房排行</h>
    )
		
  }
}
class Child_21 extends React.Component {
  render() {
    return (
    	<h style={{fontSize:'20px'}}>本周票房排行</h>
    )
		
  }
}
class Child_22 extends React.Component {
  render() {
    return (
    	<h style={{fontSize:'20px'}}><World_01/></h>
    )
		
  }
}
class Child_23 extends React.Component {
  render() {
    return (
    	<h style={{fontSize:'20px'}}>年度票房排行</h>
    )
		
  }
}

class Rank2 extends React.Component {
	componentDidMount(){
		this.setState(
		{Info: {
		       //
		        args:"area!中国" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatArea(this.state.Info);
			},
		
		)
		
	}
	

	CreatArea = (areaData) => {
	  var areaJson = JSON.stringify(areaData);
	  console.log("areaJson", areaData);
	  postMovie(areaData).then(res => {
			  //this.setState({ movieName: res.data.movieName });
				//this.setState({ moviePiaofang: res.data.moviePiaofang });
				console.log(res);
		
				var a=[];
				var b=[];

        for (let i = 9, j = 0; i >= 0; i-- , j++) {  
					a[i] = res[i].title;
					b[i] = res[i].box;
					}
					console.log("a :" + a);
					console.log(b);
	  

	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
			//for (var i=0 ; i<10; i++){
			//    a[i].name = res[i].get;
			//	}
				
			 var myChart = echarts.init(document.getElementById('main'),'light');
       var chartData = b;
        var chartName = a;
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
			
	  });
		
	}
	CreatClass = (classData) => {
	  var classJson = JSON.stringify(classData);
	  console.log("classJson", classData);
	  postMovie(classData).then(res => {
			 
				console.log(res);
		
				var a=[];
				var b=[];
	
	      for (let i = 9, j = 0; i >= 0; i-- , j++) {  
					a[i] = res[i].title;
					b[i] = res[i].box;
					}
					console.log("a :" + a);
					console.log(b);
	  
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
			//for (var i=0 ; i<10; i++){
			//    a[i].name = res[i].get;
			//	}
				
			 var myChart = echarts.init(document.getElementById('main'),'light');
	     var chartData = b;
	     var chartName = a;
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
			
	  });
		
	}
	

		 constructor() {
	  super();
	  this.state = {
	    child_0Visible: true,
		  child_1Visible: false,
		  child_2Visible: false,
		  child_3Visible: false,

	  }
	}
	
		onClick_0() {
			this.setState(
			{Info: {
			       //
			        args:"area!中国"}
			},() => {
			    console.log(this.state.Info);
			    this.CreatArea(this.state.Info);
				},
			
			)
			 this.setState(prevState => ({ child_0Visible: true, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
			}
			
	onClick_1() {
		this.setState(
		{Info: {
		       //
		        args:"area!美国" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatArea(this.state.Info);
			},
			
		)
		 this.setState(prevState => ({ child_0Visible: false, child_1Visible:true ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
		
	 	}
	onClick_2() {
		this.setState(
		{Info: {
		       //
		        args:"area!日本" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatArea(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:true, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_3() {
		this.setState(
		{Info: {
		       //
		        args:"area!韩国" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatArea(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:true, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_4() {
			this.setState(
		{Info: {
		       //
		        args:"type!动作" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:true ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_5() {
		this.setState(
		{Info: {
		       //
		        args:"type!科幻" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:true, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_6() {
		this.setState(
		{Info: {
		       //
		        args:"type!喜剧" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:true, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_7() {
		this.setState(
		{Info: {
		       //
		        args:"type!爱情" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:true ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_8() {
		this.setState(
		{Info: {
		       //
		        args:"type!动画" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:true, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_9() {
		this.setState(
		{Info: {
		       //
		        args:"type!冒险" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:true, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_10() {
		this.setState(
		{Info: {
		       //
		        args:"type!奇幻" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:true ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_11() {
		this.setState(
		{Info: {
		       //
		        args:"type!惊悚" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:true, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_12() {
		this.setState(
		{Info: {
		       //
		        args:"type!青春" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:true, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_13() {
		this.setState(
		{Info: {
		       //
		        args:"type!儿童" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:true ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_14() {
		this.setState(
		{Info: {
		       //
		        args:"type!剧情" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:true, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_15() {
		this.setState(
		{Info: {
		       //
		       args:"type!运动" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:true, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_16() {
		this.setState(
		{Info: {
		       //
		        args:"type!恐怖" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:true ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_17() {
		this.setState(
		{Info: {
		       //
		        args:"type!战争" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:true, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false, }));
	}
	onClick_18() {
		this.setState(
		{Info: {
		       //
		        args:"type!犯罪" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:true, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_19() {this.setState(
		{Info: {
		       //
		        args:"type!短片" }
		},() => {
		    console.log(this.state.Info);
		    this.CreatClass(this.state.Info);
			},
			
		)
	  this.setState(prevState => ({child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:true ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_20() {
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:true, child_21Visible:false, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_21() {
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:true, child_22Visible:false ,child_23Visible:false,  }));
	}
	onClick_22() {
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:true ,child_23Visible:false,  }));
	}
	onClick_23() {
	  this.setState(prevState => ({ child_0Visible: false, child_1Visible:false ,child_2Visible:false, child_3Visible:false, child_4Visible:false ,child_5Visible:false, child_6Visible:false, child_7Visible:false ,child_8Visible:false, child_9Visible:false, child_10Visible:false ,child_11Visible:false, child_12Visible:false, child_13Visible:false ,child_14Visible:false, child_15Visible:false, child_16Visible:false ,child_17Visible:false, child_18Visible:false, child_19Visible:false ,child_20Visible:false, child_21Visible:false, child_22Visible:false ,child_23Visible:true, }));
	}
	
	
	
	
	
	render() {
	    return (
		 <Layout className="Nav">
    <Header className="header">
    <Menu
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={['2']}
       style={{ lineHeight: '64px'}}
     >
        <Menu.Item key="1" style={{fontSize:"20px"}}><Link to='/home'>首页</Link></Menu.Item>
          <Menu.Item key="2" style={{fontSize:"20px"}}><Link to='/rank2'>票房排行</Link></Menu.Item>
		  <Menu.Item key="3" style={{fontSize:"20px"}}><Link to='/rank'>评分排行</Link></Menu.Item>
       <Menu.Item key="4" style={{fontSize:"20px"}}><Link to='/predict'>票房预测</Link></Menu.Item>
	   		 <Menu.Item key="5" style={{fontSize:"20px"}}><Link to='/world'>全球电影</Link></Menu.Item>
         <Menu.Item key="6" style={{fontSize:"20px"}}><Link to='/Search'>电影库</Link></Menu.Item>
				 </Menu>
    </Header>
    <Layout style={{ padding: '0 100px 0' }}>
      <Sider width={200} style={{ background: '#fff' ,overflow: 'auto',
        height: '650px',
        
        left: 0, }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['4']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="environment" />
                地区排行
              </span>
            }
          >
            <Menu.Item key="4" onClick={() => this.onClick_0()}>中国</Menu.Item>
            <Menu.Item key="5" onClick={() => this.onClick_1()}>美国</Menu.Item>
            <Menu.Item key="6" onClick={() => this.onClick_2()}>欧洲</Menu.Item>
            <Menu.Item key="7" onClick={() => this.onClick_3()}>日韩</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="database" />
                类别排行
              </span>
            }
          >
            <Menu.Item key="8" onClick={() => this.onClick_4()}>动作</Menu.Item>
            <Menu.Item key="9" onClick={() => this.onClick_5()}>科幻</Menu.Item>
            <Menu.Item key="10" onClick={() => this.onClick_6()}>喜剧</Menu.Item>
            <Menu.Item key="11" onClick={() => this.onClick_7()}>爱情</Menu.Item>
						<Menu.Item key="12" onClick={() => this.onClick_8()}>动画</Menu.Item>
						<Menu.Item key="13" onClick={() => this.onClick_9()}>冒险</Menu.Item>
						<Menu.Item key="14" onClick={() => this.onClick_10()}>奇幻</Menu.Item>
						<Menu.Item key="15" onClick={() => this.onClick_11()}>惊悚</Menu.Item>
						<Menu.Item key="16" onClick={() => this.onClick_12()}>青春</Menu.Item>
						<Menu.Item key="17" onClick={() => this.onClick_13()}>儿童</Menu.Item>
						<Menu.Item key="18" onClick={() => this.onClick_14()}>剧情</Menu.Item>
						<Menu.Item key="19" onClick={() => this.onClick_15()}>运动</Menu.Item>
						<Menu.Item key="20" onClick={() => this.onClick_16()}>恐怖</Menu.Item>
						<Menu.Item key="21" onClick={() => this.onClick_17()}>战争</Menu.Item>
						<Menu.Item key="22" onClick={() => this.onClick_18()}>犯罪</Menu.Item>
						<Menu.Item key="23" onClick={() => this.onClick_19()}>短片</Menu.Item>
          </SubMenu>
        
					
					 
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
       
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
					 {
					      this.state.child_0Visible
					        ? <Child_0 />
					        : null
					    }
						{
						      this.state.child_1Visible
						        ? <Child_1 />
						        : null
						    }
							{
							      this.state.child_2Visible
							        ? <Child_2 />
							        : null
							    }
								{
								      this.state.child_3Visible
								        ? <Child_3 />
								        : null
								    }
					{
					     this.state.child_4Visible
					       ? <Child_4 />
					       : null
					   }
											{
											      this.state.child_5Visible
											        ? <Child_5 />
											        : null
											    }
												{
												      this.state.child_6Visible
												        ? <Child_6 />
												        : null
												    }
													{
													      this.state.child_7Visible
													        ? <Child_7 />
													        : null
													    }
															{
															     this.state.child_8Visible
															       ? <Child_8 />
															       : null
															   }
																					{
																					      this.state.child_9Visible
																					        ? <Child_9 />
																					        : null
																					    }
																						{
																						      this.state.child_10Visible
																						        ? <Child_10 />
																						        : null
																						    }
																							{
																							      this.state.child_11Visible
																							        ? <Child_11 />
																							        : null
																							    }
																									{
																									     this.state.child_12Visible
																									       ? <Child_12 />
																									       : null
																									   }
																															{
																															      this.state.child_13Visible
																															        ? <Child_13 />
																															        : null
																															    }
																																{
																																      this.state.child_14Visible
																																        ? <Child_14 />
																																        : null
																																    }
																																	{
																																	      this.state.child_15Visible
																																	        ? <Child_15 />
																																	        : null
																																	    }
																																			{
																																			     this.state.child_16Visible
																																			       ? <Child_16 />
																																			       : null
																																			   }
																																									{
																																									      this.state.child_17Visible
																																									        ? <Child_17 />
																																									        : null
																																									    }
																																										{
																																										      this.state.child_18Visible
																																										        ? <Child_18 />
																																										        : null
																																										    }
																																											{
																																											      this.state.child_19Visible
																																											        ? <Child_19 />
																																											        : null
																																											    }
																																													{
																																													     this.state.child_20Visible
																																													       ? <Child_20 />
																																													       : null
																																													   }
																																																			{
																																																			      this.state.child_21Visible
																																																			        ? <Child_21 />
																																																			        : null
																																																			    }
																																																				{
																																																				      this.state.child_22Visible
																																																				        ? <Child_22 />
																																																				        : null
																																																				    }
																																																					{
																																																					      this.state.child_23Visible
																																																					        ? <Child_23 />
																																																					        : null
																																																					    }
																																																							
					
        </Content>
      </Layout>
    </Layout>
	<Footer style={{ textAlign: 'center' }}>created by 华迪大数据实习小组</Footer>
  </Layout>
  
	    )
	}
}

export default Rank2;