import React, { Component } from 'react';
import './Recommand.css';
import { Layout, Menu, Breadcrumb, Icon,Steps, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Input } from 'antd';
import { postBox } from './Service';
import World_01 from './World_01';
const { Header, Content, Sider, Footer } = Layout;

class Globe extends Component {
	
	
	render() {
		
	    return (
		 <Layout className="Nav" >
    <Header className="header">
      <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['5']}
         style={{ lineHeight: '64px'}}
       >
 <Menu.Item key="1" style={{fontSize:"20px"}}><Link to='/home'>首页</Link></Menu.Item>
          <Menu.Item key="2" style={{fontSize:"20px"}}><Link to='/rank'>票房排行2</Link></Menu.Item>
					<Menu.Item key="3" style={{fontSize:"20px"}}><Link to='/rank'>评分排行</Link></Menu.Item>
       <Menu.Item key="4" style={{fontSize:"20px"}}><Link to='/predict'>票房预测</Link></Menu.Item>
			 		 <Menu.Item key="5" style={{fontSize:"20px"}}><Link to='/world'>全球电影</Link></Menu.Item>
			   <Menu.Item key="6" style={{fontSize:"20px"}}><Link to='/Search'>电影库</Link></Menu.Item>
				 </Menu>
    </Header>
    <Layout style={{ padding: '0 100px 0' }}>
     
      <Layout style={{ padding: '0 24px 24px' }}>
       
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <World_01/>
        </Content>
      </Layout>
    </Layout>
	<Footer style={{ textAlign: 'center' }}>created by 华迪大数据实习小组</Footer>
  </Layout>
  
	    )
	}
}

export default Globe;