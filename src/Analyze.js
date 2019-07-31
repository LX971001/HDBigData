import React, { Component } from 'react';
import './Analyze.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import World_01 from './World_01.js';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
class Ana extends Component {
	render() {
	    return (
		 <Layout className="Nav">
    <Header className="header">
      <div className="logo" />
	  
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '64px'}}
      >
        <Menu.Item key="1" style={{fontSize:"20px"}}><Link to='/home'>首页</Link></Menu.Item>
            <Menu.Item key="2" style={{fontSize:"20px"}}><Link to='/rank'>票房排行</Link></Menu.Item>
            <Menu.Item key="3" style={{fontSize:"20px"}}>票房分析</Menu.Item>
        <Menu.Item key="4" style={{fontSize:"20px"}}><Link to='/recommand'>推荐</Link></Menu.Item>
      </Menu>
    </Header>
    <Layout style={{ padding: '0 100px 0' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
         
            <Menu.Item key="1" >导演</Menu.Item>
            <Menu.Item key="2">演员</Menu.Item>
            <Menu.Item key="3">题材</Menu.Item>
            <Menu.Item key="4">市场推荐</Menu.Item>
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>票房分析</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
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

export default Ana;