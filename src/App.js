import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import Data from './components/Data';
import Conts from './components/Conts';


function App() {


    const[conts,setCont] = useState([])

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
          setCont(json.data);

        })
        .catch(error => console.log(error));
    };
    

    //let current_id = conts.length +1;

    const addCont = (cont) => {
      const newCont = {
      'id': 1,
      'name': cont.name,
      'email': cont.id

      };

      

      //Add Task
      fetch('api/add_cont', {
        method : 'POST',
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
        .then(json => {
          console.log(json);
          setCont(json.data);

        })
        .catch(error => console.log(error));
    };
  
    

    //Delete Task
    const delCont = (id) => {
      fetch('api/del_cont/${id}', {
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
          setCont(json.data);

        })
        .catch(error => console.log(error));
        for (let i = 0; i < conts.length; i++) {
          if(conts[i].id > id) {
            conts[i].id -= 1
          }
        }
    };     
    

    return (
      <div className="App">

        <Nav/>     

        <Form onAdd = {addCont}/>  
        {conts.map(cont =>{
          return(
            <Conts cont = {cont} onDelete = {delCont}/>
          )
        })}
      
      </div>

    );

    

  }

  export default App;

