
import {useState} from 'react'

function Form ( {onAdd} ) {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        onAdd({name,email})

        setName('')
        setEmail('')
        
    }

    return(
        <form onSubmit = {onSubmit}>

            <div class = "spform">

            <label for = "name">Source Name:</label>
            <input type = "text"  id = "name" value={name} onChange = {(e) => setName(e.target.value)} />

            </div> 

            <div class = "spform"> 

            <label for = "email">Source Email:</label>
            <input type = "text"  id = "email" value={email} onChange = {(e) => setEmail(e.target.value)} />


            </div>

            <button class="press">Submit</button>

        </form>
    )
}

export default Form