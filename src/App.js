import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import Data from './components/Data';
import Conts from './components/Conts';


function App() {


    const[conts, setConts] = useState([])
  
    useEffect(() => fetchData());
    
    const fetchData = async () => {
      fetch('api/conts', {
        method : 'GET',
        headers: {
          'Content-Type' : 'application/json'
        }})

        .then(response => {
            if(response.status >= 200 && response.status < 300){
              return response;
            }
            const error = new Error('HTTP Error ${response.statusText}');
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        })
        .then(response => response.json()) 
        .then(json => {
          console.log(json);
          setConts(json.data);

        })
        .catch(error => console.log(error));
    };
    

    let current_id = conts.length+1;
    

    const addCont = (cont) => {
      const newCont = {
      'id': current_id,
      'name': cont.name,
      'email': cont.email,

      };

      current_id ++;
      
      //Add Task
      fetch('/api/add_cont', {
        method: 'POST',
        body: JSON.stringify({cont: newCont}),
        headers: {
          'Content-Type' : 'application/json'
        }})

        .then(response => {
            if(response.status >= 200 && response.status < 300){
              return response;
            }
            const error = new Error('HTTP Error ${response.statusText}');
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        })
        .then(response => response.json()) 
        .then(json =>  {
          console.log(json);
          conts = Array.from(json.data);
        })
        .catch(error => console.log(error));
    };
  
    

    //Delete Task
    const delCont = (id) => {


      
      fetch('/api/del_cont/${id}', {
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        }})

        .then(response => {
            if(response.status >= 200 && response.status < 300){
              return response;
            }
            const error = new Error('HTTP Error ${response.statusText}');
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        })
        .then(response => response.json()) 
        .then(json => {
          console.log(json);
          conts = Array.from(json.data);
        })
        .catch(error => console.log(error));
   
    };     
  

    return (
      <div className="App">

        <Nav/>     

        <Form onAdd = {addCont}/>  
          
        <Conts conts = {conts} onDelete = {delCont}/>
    
            
      
      </div>

    );

    

  }

  export default App;

