import React, { Component } from 'react';
import './Recommand.css';
import { Layout, Menu, Breadcrumb, Icon,Steps, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Input } from 'antd';
import { postBox } from './Service';

const { Step } = Steps;
const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const steps = [
  {
    title: '第一步',
    content: '电影基本信息',
  },
  {
    title: '第二步',
    content: '电影详细信息',
  },
  {
    title: '第三部',
    content: '演职人员信息',
  },
];
class Child_0 extends React.Component {
	
  render() {
   return (
	 <div style={{height:250}}>
	 <br/><br/><br/><br/><br/><br/>
   <h style={{fontSize:'20px', marginLeft:450}}>请输入电影名<Input style={{width:200}} />
	 </h>
	 
	 </div>
   )
		
  }
}
class Child_1 extends React.Component {
	
  render() {
   return (
	 <div style={{height:250}}>
	 <br/><br/><br/><br/><br/><br/>
   <h style={{fontSize:'20px', marginLeft:250}}>请输入电影上映日期:<Input style={{width:200}} placeholder="yyyy/mm/dd" />
	 </h>
	 <h style={{fontSize:'20px', marginLeft:150}}>请输入电影类型:<Input style={{width:100}}/>
	 </h>
	 </div>
   )
		
  }
}
class Child_2 extends React.Component {
	constructor(props) {
    super(props);
	this.state={
		director:"",
		actor1:"",
		actor2:"",
		actor3:"",
		actor4:"",
	}
}
	CreatBox = (movieData) => {
	  var areaJson = JSON.stringify(movieData);
	  console.log("areaJson", movieData);
	  postBox(movieData).then(res => {
				console.log(res);
	    alert("预测票房为:" + res + "万元")
	
	    if (res!=null) {
	      console.log('post success')
	    }
	    else {
	      console.log("post failed")
	    }

		
			      });
			
	  
		
	}
	 inputChange0(e){
		console.log(e.target.value)
		this.setState({
			director:e.target.value
		})
	}
		 inputChange1(e){
		console.log(e.target.value)
		this.setState({
			actor1:e.target.value
		})
	}
		 inputChange2(e){
		console.log(e.target.value)
		this.setState({
			actor2:e.target.value
		})
	}
		 inputChange3(e){
		console.log(e.target.value)
		this.setState({
			actor3:e.target.value
		})
	}
		 inputChange4(e){
		console.log(e.target.value)
		this.setState({
			actor4:e.target.value
		})
	}
	onClick= (e) =>{	
		this.setState(
		{Info:{
			director:this.state.director,
			actor1:this.state.actor1,
			actor2:this.state.actor2,
			actor3:this.state.actor3,
			actor4:this.state.actor4,
			
			}
		},() => {
		    console.log(this.state.Info);
		    this.CreatBox(this.state.Info);
			},
		
		)}
  render() {
    return (
    <div>
		<br/><br/>
		<Input style={{width:200,marginLeft:250}} placeholder="导演" onChange={(e)=>this.inputChange0(e)}/> <br/><br/>
		<Input style={{width:200,marginLeft:250}} placeholder="主演1" onChange={(e)=>this.inputChange1(e)}/>
		<Input style={{width:200, marginLeft:20}} placeholder="主演2" onChange={(e)=>this.inputChange2(e)}/>
		<Input style={{width:200, marginLeft:20}} placeholder="主演3" onChange={(e)=>this.inputChange3(e)}/>
		<Input style={{width:200, marginLeft:20}} placeholder="主演4" onChange={(e)=>this.inputChange4(e)}/>
		<Button type="primary" onClick={this.onClick}>提交</Button>
		</div>
    )
		
  }
}
class Rec extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      current: 0,
			child_0Visible: true,
			child_1Visible: false,
			child_2Visible: false,
		//	director:"",
		//	actor1:"",
		//	actor2:"",
		//	actor3:"",
		//	actor4:"",
    };
  }
	next0() {
	  const current = 1;
	  this.setState({ current });
		this.setState(prevState => ({ child_0Visible: false, child_1Visible:true,child_2Visible:false}));
	}
	next() {
    const current = 2;
    this.setState({ current });
		this.setState(prevState => ({ child_0Visible: false, child_1Visible:false,child_2Visible:true}));
  }


  prev0() {
    const current = this.state.current - 1;
    this.setState({ current });
		this.setState(prevState => ({ child_0Visible: true, child_1Visible:false,child_2Visible:false}));
  }
	 prev() {
	  const current = this.state.current - 1;
	  this.setState({ current });
		this.setState(prevState => ({ child_0Visible: false, child_1Visible:true,child_2Visible:false}));
	}
	
	
	render() {
		const { current } = this.state;
	    return (
		 <Layout className="Nav" >
    <Header className="header">
      <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['4']}
         style={{ lineHeight: '64px'}}
       >
 <Menu.Item key="1" style={{fontSize:"20px"}}><Link to='/home'>首页</Link></Menu.Item>
          <Menu.Item key="2" style={{fontSize:"20px"}}><Link to='/rank'>票房排行</Link></Menu.Item>
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
          <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
					
        </Steps>
				
        <div className="steps-content">{steps[current].content}</div>
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
															
																	<br/><br/><br/>
        <div className="steps-action" style={{marginLeft:600}}>
          {current === 0 && (
            <Button type="primary" onClick={() => this.next0()}>
              下一步
            </Button>
          )},
					 {current === 1 && (
					  <Button type="primary" onClick={() => this.next()}>
					    下一步
					  </Button>
					)}
         
          {current === 1 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev0()}>
              上一步
            </Button>
          )}
					{current === 2 && (
					  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
					    上一步
					  </Button>
					)}
        </div>
			
      </div>
        </Content>
      </Layout>
    </Layout>
	<Footer style={{ textAlign: 'center' }}>created by 华迪大数据实习小组</Footer>
  </Layout>
  
	    )
	}
}

export default Rec;