import userContext from "./context";
import {useContext,useState,useEffect} from 'react';
import axios from 'axios'
import {Table,Card} from 'react-bootstrap';
import del from './images/whitedelete.png';
import './App.css'
import Footer from "./footer";

export default function AllData(){
    // const ctx = useContext(userContext);

    const[data,setData]=useState([]);
    const[trigger,setTrigger]=useState(false);
    const url='https://server-h269.onrender.com/data';

useEffect(()=>{
  async function fetchdata() {
    await axios.get(url).then((item) => {
     setData(item.data);
     console.log(item.data);
     setTrigger(false)
    })
}
fetchdata();
},[trigger])

    async function handleDelete({_id,name}){
      console.log(_id);
      let url = `https://server-h269.onrender.com/delete/${_id}`
      console.log(url);
      await axios.delete(url).then(setTrigger(true))
    }
  
    return(<>
      
         <div className="table-parent">
        <h2 style={{color:'#9d75cf',textAlign:'center'}}>All Data</h2>
        {/* <Card style={{border:"none"}}> */}
        <div style={{ overflowX: "auto", maxWidth: "90%"}}>
        <Table  bordered hover responsive  className=" custom-table">
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>Id</th>
          <th style={{textAlign:"center"}}>Name</th> 
          <th style={{textAlign:"center"}}>Email</th>
          <th style={{textAlign:"center"}}>Password</th>
          <th style={{textAlign:"center"}}>Amount</th>
          <th style={{textAlign:"center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item,index)=>{
             
         return  <tr key={index} >
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.amount}</td>
          <td><button onClick={()=>handleDelete(item)} style={{backgroundColor:"#9d75cf",border:"none"}}><img src={del} style={{width:"30px",height:"30px"}}/></button></td>
        </tr>
            })
        }
             
      </tbody>
    </Table>
    </div>
    {/* </Card> */}
    </div> 
    <Footer  position="fixed" />  
    </>)
    }