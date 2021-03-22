import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import { useState } from 'react';
import Data from './components/Data';
import Conts from './components/Conts';


function App() {

    const[conts,setCont] = useState([
      {
      'id' : 1,
      'sml': "yes",
      'name' : "Presbo",
      'email' : 'presbo@columbia.edu'
      },

      {
      'id' : 2,
      'name' : "John Jay Mouse",
      'email' : 'mouse@columbia.edu'
      },


      { 
      'id': 3,
      'name': "Water Bottle Man",
      'email' : 'flipper@columbia.com' 
      },

    
    ])
    
  

    //Add Task
  

    const addCont = (cont) => {
      const id = conts.length + 1 
      const newCont = {id,...cont}
      setCont([...conts,newCont])
    }

    //Delete Task
    const delCont = (id) => {
      for (let i = 0; i < conts.length; i++) {
        if(conts[i].id > id) {
          conts[i].id -= 1
        }
      }

      conts[id-1].id = -1

      setCont(conts.filter((cont) => cont.id  !== -1))
    }

    
    

    return (
      <div className="App">

        <Nav/>     

        <Form onAdd = {addCont}/>  
        
        
        {/* <Data num = "1:" sml = "yes" nam = "Presbo" email = 'presbo@columbia.edu'/>
        <Data num = "2:" sml = "no" nam = "John Jay Mouse" email = 'mouse@columbia.edu'/>
        <Data num = "3:" sml = "no" nam = "Water Bottle Man" email = 'flipper@columbia.com'/> */}

        <Conts conts = {conts} onDelete = {delCont}/>


      </div>

    );

    

  }

  export default App;

