import React, { Component } from 'react';
import './Home.css';
import {Image } from 'react-bootstrap';
import { Layout, Menu, Breadcrumb, Icon, Carousel, List, Avatar, Divider, Card, Row, Col, Affix } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Input } from 'antd';
import { postArea, postMovie } from './Service';
import axios from 'axios';

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Meta } = Card;


class Home extends Component {
	  state = {top:45
    
  };
		constructor(props) {
	    super(props);
	    this.state = {
	
		
		  				}
		}
  CreatArea_0 = (areaData) => {
    var areaJson = JSON.stringify(areaData);
    console.log("areaJson", areaData);
    postMovie(areaData).then(res => {
  		  //this.setState({ movieName: res.data.movieName });
  			//this.setState({ moviePiaofang: res.data.moviePiaofang });
  			console.log(res);
  	     var a=[];
				  for (let i = 2, j = 0; i >= 0; i-- , j++) {  
				  a[i] = res[i];
					 }
         this.setState(
        {data1:a
    },() => {
        console.log(this.state.data1);
    	},
    
    )
  
      if (res!=null) {
        console.log('post success')
      }
      else {
        console.log("post failed")
      }
			 
			})
			}
	  CreatArea_1 = (areaData) => {
	  var areaJson = JSON.stringify(areaData);
	  console.log("areaJson", areaData);
	  postMovie(areaData).then(res => {
			  //this.setState({ movieName: res.data.movieName });
				//this.setState({ moviePiaofang: res.data.moviePiaofang });
				console.log(res);
		     const b=[];
				  for (let i = 2, j = 0; i >= 0; i-- , j++) {  
				  b[i] = res[i];
					 }
	       this.setState(
	      { data1:this.state.data1,
					listdata2:b
	  },() => {
	      console.log(this.state.data2);
	  	},
	  
	  )
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
			 
			})
			}
	  CreatClass_0 = (areaData) => {
	  var areaJson = JSON.stringify(areaData);
	  console.log("areaJson", areaData);
	  postMovie(areaData).then(res => {
			  //this.setState({ movieName: res.data.movieName });
				//this.setState({ moviePiaofang: res.data.moviePiaofang });
				console.log(res);
		     var a=[];
				  for (let i = 2, j = 0; i >= 0; i-- , j++) {  
				  a[i] = res[i];
					 }
	       this.setState(
	      {data3:a
	  },() => {
	      console.log(this.state.data3);
	  	},
	  
	  )
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
			 
			})
			}
	  CreatClass_1 = (areaData) => {
	  var areaJson = JSON.stringify(areaData);
	  console.log("areaJson", areaData);
	  postMovie(areaData).then(res => {
			  //this.setState({ movieName: res.data.movieName });
				//this.setState({ moviePiaofang: res.data.moviePiaofang });
				console.log(res);
		     var a=[];
				  for (let i = 2, j = 0; i >= 0; i-- , j++) {  
				  a[i] = res[i];
					 }
	       this.setState(
	      {data4:a},() => {
	      console.log(this.state.data4);
	  	},
	  
	  )
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
			 
			})
			}
	  CreatClass_2 = (areaData) => {
	  var areaJson = JSON.stringify(areaData);
	  console.log("areaJson", areaData);
	  postMovie(areaData).then(res => {
			  //this.setState({ movieName: res.data.movieName });
				//this.setState({ moviePiaofang: res.data.moviePiaofang });
				console.log(res);
		     var a=[];
				  for (let i = 2, j = 0; i >= 0; i-- , j++) {  
				  a[i] = res[i];
					 }
	       this.setState(
	      {data5:a
	  },() => {
	      console.log(this.state.data5);
	  	},
	  
	  )
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }
			 
			})
			}								
	 componentDidMount(){
		  this.setState(
		  {
				Info0: { args:"area!中国" },
			  Info1: { args:"area!美国" },
				Info2: { args:"type!动画" },
				Info3: { args:"type!科幻" },
				Info4: { args:"type!爱情" }
		  },() => {
		 //     console.log(this.state.Info0);
		      this.CreatArea_0(this.state.Info0);
					this.CreatArea_1(this.state.Info1);
					this.CreatClass_0(this.state.Info2);
					this.CreatClass_1(this.state.Info3);
					this.CreatClass_2(this.state.Info4);
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
          defaultSelectedKeys={['1']}
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
      
      <Layout style={{ padding: '0 100px 0' }}>
         <Sider  width={270} style={{ background: '#fff' }}><Affix offsetTop={this.state.top}><br/><h1 style={{fontSize:30}}>今日热门</h1>
				 <Carousel autoplay>
    <div>
      <Image src={require("./image/pic_01.jpg")} />
    </div>
    <div>
      <Image src={require("./image/pic_02.jpg")} />
    </div>
    <div>
      <Image src={require("./image/pic_03.jpg")} />
    </div>
    <div>
      <Image src={require("./image/pic_04.jpg")} />
    </div>
  </Carousel>
	</Affix>
	</Sider>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 10,
            minHeight: 300,
          }}
        >
			
				<h1 style={{fontSize:30}}>7月7日 周天 今日大盘：24830.2万 </h1>,
				<Image src={require("./image/char_01.png")} />
				<Divider orientation="left">票房最高电影</Divider>
				 <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<Image src={require("./image/pic_21.jpg")} />}
        >
          <Meta title="阿拉丁（2019）" description="盖·里奇 Guy Ritchie" />
        </Card>
      </Col>
      <Col className="gutter-row" span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<Image src={require("./image/pic_22.jpg")} />}
        >
          <Meta title="哥斯拉2：怪兽之王（2019）" description="迈克尔·道赫蒂 Michael Dougherty" />
        </Card>
      </Col>
      <Col className="gutter-row" span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<Image src={require("./image/pic_23.jpg")} />}
        >
          <Meta title="
绝杀慕尼黑（2019）" description="安东·梅格迪契夫 Anton Megerdichev" />
        </Card>
      </Col>
      
    </Row>
  </div>
	<Divider orientation="left">热门电影推荐</Divider>
				 <div className="gutter-example">
	  <Row gutter={16}>
	    <Col className="gutter-row" span={8}>
	      <Card
	        hoverable
	        style={{ width: 240 }}
	        cover={<Image src={require("./image/pic_32.jpg")} />}
	      >
	        <Meta title="阿凡达（2010）" description="詹姆斯·卡梅隆 James Cameron" />
	      </Card>
	    </Col>
	    <Col className="gutter-row" span={8}>
	      <Card
	        hoverable
	        style={{ width: 240 }}
	        cover={<Image src={require("./image/pic_31.jpg")} />}
	      >
	        <Meta title="流浪地球（2019）" description="郭帆 Frant Gwo" />
	      </Card>
	    </Col>
	    <Col className="gutter-row" span={8}>
	      <Card
	        hoverable
	        style={{ width: 240 }}
	        cover={<Image src={require("./image/pic_33.jpg")} />}
	      >
	        <Meta title="疯狂的外星人（2019）" description="宁浩 Hao Ning" />
	      </Card>
	    </Col>
	    
	  </Row>
			  <Row gutter={16}>
		  <Col className="gutter-row" span={8}>
		    <Card
		      hoverable
		      style={{ width: 240 }}
		      cover={<Image src={require("./image/pic_34.jpg")} />}
		    >
		      <Meta title="爱宠大机密2（2019）" description="克里斯·雷纳德 Chris Renaud" />
		    </Card>
		  </Col>
		  <Col className="gutter-row" span={8}>
		    <Card
		      hoverable
		      style={{ width: 240 }}
		      cover={<Image src={require("./image/pic_35.jpg")} />}
		    >
		      <Meta title="疾速备战（2019）" description="查德·斯塔尔斯基 Chad Stahelski" />
		    </Card>
		  </Col>
		  <Col className="gutter-row" span={8}>
		    <Card
		      hoverable
		      style={{ width: 240 }}
		      cover={<Image src={require("./image/pic_36.jpg")} />}
		    >
		      <Meta title="寄生虫（2019）" description="奉俊昊 Joon-ho Bong" />
		    </Card>
		  </Col>
		  
		</Row>
	</div>
				
			
	
				
					
				
         
        </Content>
				<Sider  width={270} style={{ background: '#fff' }} ><br/><h1 style={{fontSize:30}}>内地榜单</h1>
				<List
    itemLayout="horizontal"
    dataSource={this.state.data1}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
			    
          avatar={<Avatar shape="square" size={80}
					src={item.imgAddress}
					/>}
          title={item.title}
          description= {item.director}
        />
      </List.Item>
    )}
  />
	<br/><h1 style={{fontSize:30}}>美国榜单</h1>
	<List
	  itemLayout="horizontal"
	  dataSource={this.state.listdata2}
	   renderItem={item => (
	     <List.Item>
	       <List.Item.Meta
	 		    
	         avatar={<Avatar shape="square" size={80}
	 				src={item.imgAddress}
	 				/>}
	         title={item.title}
	         description= {item.director}
	       />
	     </List.Item>
	   )}
	 />
	<br/><h1 style={{fontSize:30}}>动画电影榜单</h1>
	<List
	  itemLayout="horizontal"
	  dataSource={this.state.data3}
	   renderItem={item => (
	     <List.Item>
	       <List.Item.Meta
	 		    
	         avatar={<Avatar shape="square" size={80}
	 				src={item.imgAddress}
	 				/>}
	         title={item.title}
	         description= {item.director}
	       />
	     </List.Item>
	   )}
	 />
	<br/><h1 style={{fontSize:30}}>科幻片榜单</h1>
	<List
	  itemLayout="horizontal"
 dataSource={this.state.data4}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
			    
          avatar={<Avatar shape="square" size={80}
					src={item.imgAddress}
					/>}
          title={item.title}
          description= {item.director}
        />
      </List.Item>
    )}
  />
	<br/><h1 style={{fontSize:30}}>爱情片榜单</h1>
	<List
	  itemLayout="horizontal"
	  dataSource={this.state.data5}
	   renderItem={item => (
	     <List.Item>
	       <List.Item.Meta
	 		    
	         avatar={<Avatar shape="square" size={80}
	 				src={item.imgAddress}
	 				/>}
	         title={item.title}
	         description= {item.director}
	       />
	     </List.Item>
	   )}
	 />
				</Sider>
      </Layout>
    </Layout>
	<Footer style={{ textAlign: 'center' }}>created by 华迪大数据实习小组</Footer>
  </Layout>
  
	    )
	}
}

export default Home;