import React, { Component } from 'react';
import Deep from './Deep.js';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Home from './Home';

class App extends Component
{
    render(){
      return(
        <div>

         <Router>
        <div >
         
              <Nav/>
              <Switch>
                   <Route path="/" component={Home} exact /> 
                   <Route path="/About" component={About} exact />
                   <Route path="/Contact" component={Contact} exact />
                   <Route path="/Login-SignUp" component={Deep} exact />
                   {/* <Route path="/Logout" component={Logout} exact /> */}
              </Switch>
                
            </div>
          </Router>
           
        </div>
       

       
      )
    }
}
export default App;