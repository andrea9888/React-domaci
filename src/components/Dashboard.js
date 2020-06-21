import React from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter} from "react-router-dom";
import Contact from "./components-dashboard/Contact";
import Hosting from "./components-dashboard/Hosting";
import DashboardDefault from "./components-dashboard/DashboardDefault";

import 'antd/dist/antd.css';
import '../styles/Dashboard.css';

import { Layout, Menu } from 'antd';
import { UserOutlined, FolderOpenOutlined , CloudServerOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;


class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
        console.log(props);
        this.state = {

        }
    }
    
    render() { 
        
    return ( 
        <BrowserRouter>
            <Layout>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<FolderOpenOutlined />}>
                    <Link to={this.props.location.pathname}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to={`${this.props.location.pathname}/contact`}>Contact</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<CloudServerOutlined />}>
                    <Link to={`${this.props.location.pathname}/hosting`}>Hosting</Link>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout>
            
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    
                        
                        <Switch>
                            <Route exact path={this.props.location.pathname} component={DashboardDefault} />
                            <Route path={`${this.props.location.pathname}/contact`} component={Contact} />
                            <Route path={`${this.props.location.pathname}/hosting`} component={Hosting} />
                        </Switch>
                
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
  </BrowserRouter>
            
        );
    }
}
 
export default withRouter(Dashboard);