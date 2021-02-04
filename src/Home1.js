import React, { Component } from 'react';
// import fire from './config/fire';
// import Home from './Home';
import './App.css';
import logo4 from './Image/Fp2.jpeg'
class Home1 extends Component
{
    
    render(){
       
        return(
            <div>       
                <h1 className="imh2">Two Friends</h1> 
    <h4 className="imh1">
    Some time ago, two friends were going to the city through rugged areas.Due to the<br/>
    high heat, he stops and rests. He also kept food and drink with him. When they got<br/>
    ungry in the afternoon, both of them thought of sitting at a place.<br/></h4>
             <img className="mid" src={logo4} alt="logo4"/>
<h4 className="imh1">
<br/>
    Eating food - both of them had a debate about something. And gradually the matter<br/>
    grew so much that one friend slapped the other. But after slapping, the other friend<br/>
    kept quiet and did not protest. He just took a branch of the tree and wrote it on the<br/>
    soil, "Today my best friend slapped me".<br/>
    <br/>
    After a while, he resumed the journey, due to his mind he was moving forward without<br/>
    talking to each other. when The sound of slapping friend's voice came, he was accidentally<br/>
    trapped in the swamp.another friend He quickly helped her and drove her out of the swamp.<br/>
    <br/>
    This time too, that friend did not say anything. He just picked up a sharp stone<br/>
    and started writing on the trunk of a huge tree "Today my best friend saved my life"<br/>
    <br/>
    Seeing him doing this,  another friend asked, "When I slap you, you wrote on the <br/>
    soil and when I saved your life, you are writing on the trunk of the tree, why?"<br/>
    <br/>
    Another friend said that when someone gives us trouble, we should not remember in <br/>
    mind. It so that the sorry winds like this soil can take away that problem from our <br/>
    mind, but when someone does something good for us, it should be so deeply ingrained <br/>
    in our mind That he could never be erased from our mind.<br/>
</h4>
            </div>
        )
    }
}
export default Home1;