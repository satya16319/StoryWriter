import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import fire from './config/fire';

class Nav extends Component
{
     navsytle={
        color:'white'
    }
    logout=()=>{
      fire.auth().signOut();
  }
  // state = {
  //   text: "Login/SignUp"
  // }
  
  // changeText = (text) => {
  //   var p;
  //    if(this.state.text==="Login/SignUp")
  //      p="Logout"
  //      else
  //        p="Login/SignUp"
  //   this.setState({
  //      text:p
  //    }); 
  // } 
    render(){
      return(
        <nav >
            
            <ul className="nav-links">
                <Link style={this.navsytle} to="/">
                   <li>Home</li>
                </Link>
                <Link style={this.navsytle} to="/about">
                      <li>About</li>
                </Link>
                <Link style={this.navsytle} to="contact">
                      <li>Contacts</li>
                </Link>

                <Link style={this.navsytle} to="/Login-SignUp">
                {/* <li><button onClick={this.changeText} >{this.state.text}</button></li> */}
                   <li>Login/SignUp</li>
                </Link>
                <Link style={this.navsytle} to="/Login-SignUp">
                   <li > <button className="tt" onClick={this.logout} >LogOut</button></li>
                </Link>
            </ul>
        </nav>
      )
    }
}
export default Nav;