import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel, List, Avatar, Divider, Card, Row, Col, Affix } from 'antd';
import { Link } from 'react-router-dom'
import { Input } from 'antd';

const { Search } = Input;



class Navbar extends Component {
	
	  
	
	render() {
        	
	    return (
			<div >
			  <Menu
			    theme="dark"
			    mode="horizontal"
			    defaultSelectedKeys={['1']}
			    style={{ lineHeight: '64px'}}
			  >
			    <Menu.Item key="1" style={{fontSize:"20px"}}>首页</Menu.Item>
			    <Menu.Item key="2" style={{fontSize:"20px"}}><Link to='/rank'>票房排行</Link></Menu.Item>
			 <Menu.Item key="3" style={{fontSize:"20px"}}><Link to='/recommand'>推荐</Link></Menu.Item>,
			 <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>,
			  </Menu>
			  
			  </div>
		
  
	    )
	}
}

export default Navbar;