import React from 'react';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import './App.less';
import  Home  from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { PrivateRoute } from "./PrivateRoute";
import { auth } from "./auth/AuthService";
import { Button } from 'antd';

class App extends React.Component {
  state = {
    isAuth: auth.getAuthStatus(),
  };
  toggleAuth = (isAuth) => {
    if(isAuth){
      this.setState({isAuth})
    }
    else{
      auth.logout()
    }
  };
  render(){
  return (
    <div className="App">
      <BrowserRouter>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            {this.state.isAuth?<Button type="primary" onClick={()=>this.toggleAuth(false)}>Logout</Button>:<Link to="/login">Login</Link>} 
          
          </nav>
          
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" render={()=><Login updateAuthStatus={this.toggleAuth}></Login>}></Route>
            <PrivateRoute
              component={Dashboard}
              path="/dashboard"
            ></PrivateRoute>
            <Route path="/dashboard" render={()=> <Dashboard props={this.props}></Dashboard>}></Route>
          </Switch>
        </BrowserRouter>
   
  
 

    </div>
  );
}}

export default App;
