import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import Registration from './components/Registation';
// import Home1 from './Home1';
import Home1 from './Home1';
// import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';


class Deep extends Component
{
  constructor(props)
  {
     super(props);
     this.state={
       user:null
     }
  }
  componentDidMount()
  {
    this.authListerner();
    // this.handlerApi();

  }
  authListerner()
  {
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
          this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    })
  }
 
 
  // handlerApi=async (e)=>{
  //   e.preventDefault();
  //            const api_call1 = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=1990-10-10&end_date=1990-10-16&api_key=DEMO_KEY`);
  //            const data = await api_call1.json();
  //            console.log(data);
  //             <span>ff</span>
  //            const api_call2 = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`);

  //            const data2 = await api_call2.json();
  //            console.log(data2);

  // }

    render(){
      return(
        <div >
         {this.state.user?( 
        //  <Router>
        // <div >
        //       <Switch>
                 <div>
                    {/* <Route path="/" component={Home} exact /> */}
                    <Home1/>
                 </div>
                   
                  
        //       </Switch>
                
        //     </div>
        //   </Router>
        // <Home/>
          ):(<Registration/>)}
         <br/>
         
        </div>
      )
    }
}
export default Deep;