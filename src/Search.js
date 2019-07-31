import React, { Component } from 'react';
import './Search.css';
import {Image } from 'react-bootstrap';
import { Layout, Menu, Breadcrumb, Icon, Carousel, List, Avatar, Divider, Card, Row, Col, Affix, Input } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Radio, Button } from 'antd';
import { postMovie } from './Service';

const { Search } = Input;
const listData = [];
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Meta } = Card;
var map = new Map();
//var type;
//var movieArea ;
//var movieTime;
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `movieName`,
    description:
      'movieDate',
    content:
      'moviePiaofang movieRate movieDirector movieActor',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class Srch extends React.Component {

	 
		CreatMovie = (movieData) => {
	  var areaJson = JSON.stringify(movieData);
	  console.log("areaJson", movieData);
	  postMovie(movieData).then(res => {
				console.log(res);
	    var name=[];
			var time=[];
			var director=[];
			var actor_1=[];
			var box=[];
			var rate=[];
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
	//		console.log(res);
	//		  for (let i = res.length-1, j = 0; i >= 0; i-- , j++) {  
	//			name[i] = res[i].title;
	//			time[i] = res[i].time;
	//        movie[i] = res[i]
	//		}
	//		console.log("name :" + name);
	//		console.log("time :" + time);
			this.setState({
			Data:res,
			}
			);
			
		
			      });
			
	  
		
	}
	constructor(props) {
	    super(props);
	    this.state = {
				Data : "",
		Info: {
		       //
		      //  "type":type,
					//	"movieArea":movieArea,
					//	"movieTime":movieTime,
					}
		
		  				}
		}

	
	  state = {top:45
    
  };


		onChange_0 = (e) =>  {
		const type = e.target.value;
	  console.log(e.target.value);
		this.setState(
		{Info: {
	        args: "area!" + this.state.Info.area + ",type!" + type + ",score!" + this.state.Info.score + ",sort!" + this.state.Info.sort ,
					area: this.state.Info.area,
					type: type,
					score: this.state.Info.score,
					sort: this.state.Info.sort,
				
			}
			},() => {
		    console.log(this.state.Info);
		    this.CreatMovie(this.state.Info);
			},
		
		)
	
	};
	onChange_1 = (e) =>  {
		const area = e.target.value;
	  console.log(e.target.value);
		
		this.setState(
		{Info:{
	        args: "area!" + area + ",type!" + this.state.Info.type + ",score!" + this.state.Info.score + ",sort!" + this.state.Info.sort ,
					area: area,
					type: this.state.Info.type,
					score: this.state.Info.score,
					sort: this.state.Info.sort,
				
			}
		},() => {
		    console.log(this.state.Info);
		    this.CreatMovie(this.state.Info);
			},
		
		)

	};
		onChange_2 = (e) =>  {
		const score = e.target.value;
	  console.log(e.target.value);
		
		this.setState(
		{Info: {
	        args: "area!" + this.state.Info.area + ",type!" + this.state.Info.type + ",score!" + score + ",sort!" + this.state.Info.sort ,
					area: this.state.Info.area,
					type: this.state.Info.type,
					score: score,
					sort: this.state.Info.sort,
				
					}
			},() => {
		    console.log(this.state.Info);
		    this.CreatMovie(this.state.Info);
			},
		
		)
	
	};
	onChange_3 = (e) =>  {
		const sort = e.target.value;
	  console.log(e.target.value);
		
		this.setState(
		{Info: {
	        args: "area!" + this.state.Info.area + ",type!" + this.state.Info.type + ",score!" + this.state.Info.score + ",sort!" + sort ,
					area: this.state.Info.area,
					type: this.state.Info.type,
					score: this.state.Info.score,
					sort: sort,
					
					}
			},() => {
		    console.log(this.state.Info);
		    this.CreatMovie(this.state.Info);
			},
		
		)
	
	};
	
	onClick = (inputValue) => {
		console.log(inputValue);
		const keyword = inputValue;
		
		this.setState(
		{Info:{args : "area!" + this.state.Info.area + ",type!" + this.state.Info.type + ",score!" + this.state.Info.score + ",sort!" + this.state.Info.sort + ",keywords!" + keyword,
		        area: this.state.Info.area,
		        type: this.state.Info.type,
		        score: this.state.Info.score,
		        sort: this.state.Info.sort,
						keywords:keyword,
			
		}
		},() => {
		    console.log(this.state.Info);
		    this.CreatMovie(this.state.Info);
			},
		
		)
		
		
	}
 componentDidMount(){
	// map.set("type","爱情")

  //map.set("area","中国")

  // map.set("score","0-10")
	 
	// map.set("sort","asc")
	 
	// map.set("keywords","")
// type = "全部";
// movieArea = "全部";
// movieTime = "全部";
	 this.setState(
	 { Info: {
	        args: "area!中国,type!剧情,score!0-10,sort!desc",
					area: "中国",
					type: "剧情",
					score: "0-10",
					sort: "desc",
			
			}
			//map : {"area" : "中国"}
	 },() => {
	     console.log(this.state.Info.args);
	     this.CreatMovie(this.state.Info);
	 	},
	 
	 )
 }

	
	render() {
	    return (
		 <Layout className="Nav" >
		  <Affix >
    <Header className="header">
		<div >
       <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['6']}
					selectable='false'
          style={{ lineHeight: '64px'}}
        >
          <Menu.Item key="1" style={{fontSize:"20px"}}><Link to='/home'>首页</Link></Menu.Item>
            <Menu.Item key="2" style={{fontSize:"20px"}}><Link to='/rank2'>票房排行</Link></Menu.Item>
						<Menu.Item key="3" style={{fontSize:"20px"}}><Link to='/rank'>评分排行</Link></Menu.Item>
         <Menu.Item key="4" style={{fontSize:"20px"}}><Link to='/predict'>票房预测</Link></Menu.Item>
				 		 <Menu.Item key="5" style={{fontSize:"20px"}}><Link to='/world'>全球电影</Link></Menu.Item>
           <Menu.Item key="6" style={{fontSize:"20px"}}><Link to='/Search'>电影库</Link></Menu.Item>
			    </Menu>
			
		</div>		
    </Header>
		</Affix>
    <Layout>
		 <br />
       <Search placeholder="请输入关键字" 

      	 size="large"
      	 style={{
      		         
      		          paddingLeft: 600,
      				      width: 1100,
										height:50,
      				   }} onSearch={value => this.onClick(value)} enterButton />
      <Layout style={{ padding: '0 100px 0' }}>
         
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 10,
            minHeight: 300,
          }}
        >
			 <div style={{background:'#F8F9FB'}}>
			
      <Radio.Group name="type" defaultValue="剧情" onChange={this.onChange_0} >
			<Button type="primary" >
          类型
        </Button>
        
					<Radio.Button value="剧情" style={{
						      marginLeft: 10,
						   }}>剧情</Radio.Button>
        <Radio.Button value="喜剧" style={{
						      marginLeft: 5,
						   }}>喜剧</Radio.Button>
        <Radio.Button value="短片" style={{
						      marginLeft: 5,
						   }}>短片</Radio.Button>
        <Radio.Button value="爱情" style={{
						      marginLeft: 5,
						   }}>爱情</Radio.Button>
				<Radio.Button value="纪录片" style={{
						      marginLeft: 5,
						   }}>纪录片</Radio.Button>
				<Radio.Button value="动作" style={{
						      marginLeft: 5,
						   }}>动作</Radio.Button>
				<Radio.Button value="惊悚" style={{
						      marginLeft: 5,
						   }}>惊悚</Radio.Button>
				<Radio.Button value="恐怖" style={{
						      marginLeft: 5,
						   }}>恐怖</Radio.Button>
				<Radio.Button value="漫画" style={{
						      marginLeft: 5,
						   }}>漫画</Radio.Button>
				<Radio.Button value="犯罪" style={{
						      marginLeft: 5,
						   }}>犯罪</Radio.Button>
				<Radio.Button value="冒险" style={{
						      marginLeft: 5,
						   }}>冒险</Radio.Button>
				<Radio.Button value="家庭" style={{
						      marginLeft: 5,
						   }}>家庭</Radio.Button>
				<Radio.Button value="悬疑" style={{
						      marginLeft: 5,
						   }}>悬疑</Radio.Button>
				<Radio.Button value="奇幻" style={{
						      marginLeft: 5,
						   }}>奇幻</Radio.Button>
				<Radio.Button value="科幻" style={{
						      marginLeft: 5,
						   }}>科幻</Radio.Button>
				<Radio.Button value="战争" style={{
						      marginLeft: 5,
						   }}>战争</Radio.Button>
				<Radio.Button value="传记" style={{
						      marginLeft: 5,
						   }}>传记</Radio.Button>
				<Radio.Button value="音乐" style={{
						      marginLeft: 5,
						   }}>音乐</Radio.Button>
				<Radio.Button value="历史" style={{
						      marginLeft: 5,
						   }}>历史</Radio.Button>
				<Radio.Button value="歌舞" style={{
             marginLeft: 76,  marginTop: 10,
          }}>歌舞</Radio.Button>
				<Radio.Button value="西部" style={{
						      marginLeft: 5,
						   }}>西部</Radio.Button>
				<Radio.Button value="运动" style={{
						      marginLeft: 5,
						   }}>运动</Radio.Button>
				<Radio.Button value="古装" style={{
						      marginLeft: 5,
						   }}>古装</Radio.Button>
				<Radio.Button value="武侠" style={{
						      marginLeft: 5,
						   }}>武侠</Radio.Button>
				<Radio.Button value="戏曲" style={{
						      marginLeft: 5,
						   }}>戏曲</Radio.Button>
				<Radio.Button value="黑色电影" style={{
						      marginLeft: 5,
						   }}>黑色电影</Radio.Button>
				<Radio.Button value="儿童" style={{
						      marginLeft: 5,
						   }}>儿童</Radio.Button>
				<Radio.Button value="文艺" style={{
						      marginLeft: 5,
						   }}>文艺</Radio.Button>
				<Radio.Button value="青春" style={{
						      marginLeft: 5,
						   }}>青春</Radio.Button>
				<Radio.Button value="女性" style={{
						      marginLeft: 5,
						   }}>女性</Radio.Button>
				<Radio.Button value="灾难" style={{
						      marginLeft: 5,
						   }}>灾难</Radio.Button>
				<Radio.Button value="励志" style={{
						      marginLeft: 5,
						   }}>励志</Radio.Button>
      </Radio.Group>
			  <Radio.Group name="area" defaultValue="中国" onChange={this.onChange_1} style={{
			       marginTop: 10,
			    }} >
			<Button type="primary" >
			    地区
			  </Button>
		
					<Radio.Button value="中国" style={{
						      marginLeft: 10,
						   }}>中国</Radio.Button>
					<Radio.Button value="中国香港" style={{
						      marginLeft: 5,
						   }}>中国香港</Radio.Button>
					<Radio.Button value="中国台湾" style={{
						      marginLeft: 5,
						   }}>中国台湾</Radio.Button>
					<Radio.Button value="美国" style={{
						      marginLeft: 5,
						   }}>美国</Radio.Button>
					<Radio.Button value="日本" style={{
						      marginLeft: 5,
						   }}>日本</Radio.Button>
					<Radio.Button value="法国" style={{
						      marginLeft: 5,
						   }}>法国</Radio.Button>
					<Radio.Button value="英国" style={{
						      marginLeft: 5,
						   }}>英国</Radio.Button>
					<Radio.Button value="意大利" style={{
						      marginLeft: 5,
						   }}>意大利</Radio.Button>
					<Radio.Button value="德国" style={{
						      marginLeft: 5,
						   }}>德国</Radio.Button>
					<Radio.Button value="韩国" style={{
						      marginLeft: 5,
						   }}>韩国</Radio.Button>
					<Radio.Button value="加拿大" style={{
						      marginLeft: 5,
						   }}>加拿大</Radio.Button>
					<Radio.Button value="西班牙" style={{
						      marginLeft: 5,
						   }}>西班牙</Radio.Button>
					<Radio.Button value="印度" style={{
						      marginLeft: 5,
						   }}>印度</Radio.Button>
					<Radio.Button value="西德" style={{
						      marginLeft: 5,
						   }}>西德</Radio.Button>
					<Radio.Button value="苏联" style={{
						      marginLeft: 5,
						   }}>苏联</Radio.Button>
					<Radio.Button value="澳大利亚" style={{
						      marginLeft: 5,
						   }}>澳大利亚</Radio.Button>
					<Radio.Button value="比利时" style={{
						      marginLeft: 5,
						   }}>比利时</Radio.Button>
					<Radio.Button value="瑞士" style={{
             marginLeft: 76, marginTop: 10,
          }}>瑞士</Radio.Button>
					<Radio.Button value="瑞典" style={{
						      marginLeft: 5,
						   }}>瑞典</Radio.Button>
					<Radio.Button value="墨西哥" style={{
						      marginLeft: 5,
						   }}>墨西哥</Radio.Button>
					<Radio.Button value="俄罗斯" style={{
						      marginLeft: 5,
						   }}>俄罗斯</Radio.Button>
					<Radio.Button value="阿根廷" style={{
						      marginLeft: 5,
						   }}>阿根廷</Radio.Button>
					<Radio.Button value="波兰" style={{
						      marginLeft: 5,
						   }}>波兰</Radio.Button>
					<Radio.Button value="丹麦" style={{
						      marginLeft: 5,
						   }}>丹麦</Radio.Button>
					<Radio.Button value="荷兰" style={{
						      marginLeft: 5,
						   }}>荷兰</Radio.Button>
					<Radio.Button value="巴西" style={{
						      marginLeft: 5,
						   }}>巴西</Radio.Button>
					<Radio.Button value="奥地利" style={{
						      marginLeft: 5,
						   }}>奥地利</Radio.Button>
					<Radio.Button value="泰国" style={{
						      marginLeft: 5,
						   }}>泰国</Radio.Button>
		
				</Radio.Group>
				<br/>
				 <Radio.Group name="score" onChange={this.onChange_2}  style={{
				       marginTop: 10,
				    }} defaultValue="0-10">
				<Button type="primary" >
				    评分
				  </Button>
				 
						<Radio.Button value="0-10"
						style={{
						      marginLeft: 10,
						   }}>全部</Radio.Button>
							 <Radio.Button value="9-10"
							 style={{
							       marginLeft: 5,
							    }}>9-10</Radio.Button>
				  <Radio.Button value="8-9" style={{
						      marginLeft: 5,
						   }}>8-9</Radio.Button>
				  <Radio.Button value="7-8" style={{
						      marginLeft: 5,
						   }}>7-8</Radio.Button>
				  <Radio.Button value="6-7" style={{
						      marginLeft: 5,
						   }}>6-7</Radio.Button>
					<Radio.Button value="0-6" style={{
						      marginLeft: 5,
						   }}>0-6</Radio.Button>
					
					</Radio.Group>
					<br/>
					 <Radio.Group name="rank"  defaultValue="desc" onChange={this.onChange_3}
				//	 onChange={this.onChange_3}
						style={{
					       marginTop: 10,
					    }} >
					<Button type="primary" >
					    排序
					  </Button>
					 
							<Radio.Button value="desc"
							style={{
							      marginLeft: 10,
							   }}>降序</Radio.Button>
					  <Radio.Button value="asc" style={{
							      marginLeft: 5,
							   }}>升序</Radio.Button>
						</Radio.Group>

    </div>
	      <div style={{
            
            padding: 64,
            margin: 20,
          }}>
					
				 <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 8,
    }}
    dataSource={this.state.Data}
    footer={
      <div>
        <b>湖北工业大学华迪实习小组</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text={item.box} />,
          <IconText type="like-o" text={item.score} />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={item.imgAddress}
          />
        }
				style={{fontSize:20}}
      >
        <List.Item.Meta
          title={<a href={item.href}>{item.title}</a>}
          description={item.time}
        />
				<br/>
				<br/>
        导演:{item.director}<br/><br/>
				题材:{item.type}<br/><br/>
				地区:{item.area}<br/><br/>
				主演:{item.actor1}, {item.actor2}, {item.actor3}, {item.actor4} 
      </List.Item>
    )}
  />
				</div>
        </Content>
				
      </Layout>
    </Layout>
	<Footer style={{ textAlign: 'center' }}>created by 华迪大数据实习小组</Footer>
  </Layout>
  
	    )
	}
}

export default Srch;