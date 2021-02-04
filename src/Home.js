import React from 'react';
import './App.css';
// import logo from './Image/Background.jpg';
// import logo1 from './Image/images.jpeg';
import logo2 from './Image/Fp1.jpeg';

class Home extends React.Component
{
    
    render(){
       
        return(
            <div>
                    <img className="imh" src={logo2} alt="Logo" />;                
                    {/* <h1 id="logo"></h1> */}
                    <h1 className="imh1">This is essay and motivational story site.</h1>
                   <h1 className="imh1">If you want to read story or essay, please first Login on this site</h1>
              
            </div>
        )
    }
}
export default Home;
// class Home extends Component
// {
   
   
//   constructor(props) {
//     super(props);
//     this.state = {
//       items1:[],
//     };
//   }
 
//   componentDidMount()
//   {
//     this.handlerApi();
   
//   }
    // handlerApi=async (e)=>{
    //     // e.preventDefault();
    //             //  const api_call1 = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=1990-10-10&end_date=1990-10-16&api_key=DEMO_KEY`);
    //             //  const data = await api_call1.json();
    //             //  console.log(data);
    //             //   <span>ff</span>
    //              const api_call2 = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`);
    
    //              const items = await api_call2.json();
    //             //  console.log(items);
    //             this.setState({
    //                 items1:items.near_earth_objects,
    //             })
                
    //              console.log(this.items1);
    
    //   }
     
      
    
 
//     render(){
       
//         return(
//             <div className="Home" >
              
//                 <h1>hello Home Page</h1>
//                {}
                
//             </div>
//         )

//     }
    
// }
// function Home()
// {

//     // useEffect(() => {
        
//     //     handlerApi();
//     //     // handlerApi1();
//     // }, [])
    

//     let [items,setItems] = useState([]);
//     // let [search,setItems1] = useState([]);
//     let [name,setstartDate] = useState(Date);
//     let [name1,setstartDate1] = useState(Date);
//     let [id,setstartDate2] = useState(Number);
// //   const handlerApi1=async(e)=>{
// //     let API_KEY="TjUAcsb20Bqe2QR1BCoKdb0wdrg3b1uw4LKwpNBZ";
// //     const api_call1 = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2000-10-10&end_date=2000-10-16&${API_KEY}`);
// //     const data = await api_call1.json();
// //     console.log(data);
// //   }
// let API_KEY="TjUAcsb20Bqe2QR1BCoKdb0wdrg3b1uw4LKwpNBZ";


// const handlerApi2=async (e)=>{
   

//     const api_call3= await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
//     const data3=await api_call3.json();
//     console.log(data3);
            
// }

// const handlerApi1=async (e)=>{

//       const api_call1= await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${name}&end_date=${name1}&api_key=${API_KEY}`);
//       const data=await api_call1.json();
//       console.log(data);
//     //   let store1=data.near_earth_objects.name1;
//     //   console.log(store1);
//     //   console.log(store1.length);
//     //    const gg1=[];
//     //     for(let i=0;i<store1.length;i++)
//     //     {
//     //         // <h1>{store1[i].name}</h1>
//     //         // <h1>kjghk</h1>
//     //         console.log("bfgn");
//     //      gg1.push(store1[i].name)
         
//     //      if(i===9)
//     //       break;
//     //     }
//     //     setItems1(gg1);
//       // console.log(gg);
//     //   return(
//     //   <button>gg</button>)

// }
    
//     const handlerApi=async (e)=>{
//         // e.preventDefault();
       
//                  const api_call2 = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`);
//                 //  const api_call2 = await fetch('https://fortnite-public-api-theapinetwork.com/prod09/upcoming/get');

//                  let items = await api_call2.json();
//                                 //  console.log(items);

//                 //  items=items.links;
              
//                 // setItems(items.near_earth_objects);
//                 // <h1>hftft</h1>
//                 let store=items.near_earth_objects;
//                 // console.log(store);
//                 // console.log(store.links);
//                 // console.log(store.links.name);
//                 // console.log(store.name);
//                  const gg=[];
//                   for(let i=0;i<store.length;i++)
//                   {
//                     //   <h1>{store[i].name}</h1>
//                    gg.push(store[i].name)
//                    if(i===9)
//                     break;
//                   }
//                   setItems(gg);
//                 // console.log(gg);
//                 // return(
//                 // <button>gg</button>)

    
//       }
//      const handleSave=(e)=>{
//                let  message=fire.database().ref('messages').orderByKey().limitToLast[100];
//                fire.database().ref('messages').push(e);
//       }
     
//       return(
//           <div className="nav-links" >
//               <li>
//               {/* {<h2>Name of Asteroids</h2>} */}
//               <button onClick={handlerApi}>Name of Asteroids</button>
//               <ol>
                  
//                 {items.map(reptile => (
//                     <li >
                        
//                         <h5 className="DD"> {reptile} <button  className="Saty" onClick={()=>handleSave(reptile)}>save it</button></h5>
//                     </li>
//                   ))}
//               </ol>    
//             </li>
//             <li >
              
//                 <input type="date" className="StartDate" value={name} onChange={e=>setstartDate(e.target.value)}/>
//                 <input type="date" className="EndDate" value={name1} onChange={e=>setstartDate1(e.target.value)} />
//                 {/* {console.log(name)}
//                 {console.log(name1)} */}
//                 <button onClick={handlerApi1}>Submit</button>
               
//             </li>

//             <li>
//                  <input type="number" value={id} onChange={e=>setstartDate2(e.target.value)}/>
//                  <button onClick={handlerApi2}>Get Name</button>
//             </li>
//           </div>
           
//       )
// }
// function Home()
// {
//     return;
// }
// export default Home;