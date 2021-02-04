import React, { Component } from 'react';
import fire from '../config/fire';

class Registration extends Component
{
    constructor(props)
    {
       super(props);
       this.state={
         email:'',
         password:'',
         fireError:'',
         formtitle:'Login',
         loginBtn:true,
       }
    }
     handleChange=(e)=>{
          e.preventDefault();
          this.setState({
              [e.target.name]:e.target.value,
          })
     }
     login=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            this.setState({
                fireError:error.message,
                email:'',
                password:'',
                formtitle:'Login',
                loginBtn:true,
            })
        })
    }

     signup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error)=>{
            this.setState({
                fireError:error.message,
                email:'',
                password:'',
                formtitle:'Login',
                loginBtn:true,

            })
        })
    }

         getAction=(action)=>{
            if(action==='reg')
            {
                this.setState({
                    loginBtn:false,
                    fireError:'',
                    formtitle:'Signup New Users',
                })
            }
            else
            {
                this.setState({
                    loginBtn:true,
                    fireError:'',
                    formtitle:' Login',
                })
            }
        }

        handlePassword=(e)=>{
            e.preventDefault();
            // <input type='text'/>
            let Email=this.state.email;
            console.log(Email);
            if(Email!=='')
            {
            fire.auth().sendPasswordResetEmail(Email).then(function(){
                alert('Email has sent,Please change Password');
            })
            .catch(function(error){
                alert("error");
            })
            }
            else{
                alert("please write your email first")
            }
        }
     
    render(){

        let errornote=this.state.fireError?(<div>{this.state.fireError}</div>):null;
        let submitbtn=this.state.loginBtn ?( <button className="btn btn-primary text-center"  onClick={this.login}>Login</button>):(
            <button className="btn btn-primary text-center" onClick={this.signup}>SignUp</button>
        );

        let login_signup=this.state.loginBtn ?(<button className="btn btn-primary text-center"  onClick={()=>this.getAction('reg')} >SignUp</button>):(
            <button className="btn btn-primary text-center" onClick={()=>this.getAction('reg')}>Login</button>);

      
      return(
        <div class="container">
               <div class="row" className="text-center" ><h1>{this.state.formtitle}</h1></div>   
               <div className="col-md-4 col-md-offset-5">
                   {errornote}
                   {/* alert("Hello! I am an alert box!"); */}

                    <form className="form-group">
                        <input type='text' placeholder="Email" value={this.state.email} onChange={this.handleChange} name='email'/>
                        <hr/>
                        <input type='password' placeholder="password" value={this.state.password} onChange={this.handleChange} name='password'/>
                        <hr/>
                        {submitbtn}

                    </form>
                    {login_signup}

                    <hr/>
                         <button className="btn btn-primary text-center" onClick={this.handlePassword}>Forge Passwordt</button>
                </div>            
        </div>
      )
    }
}
export default Registration;