import Small from './Small'

function Data ({sml,num,name,email,onDelete}) {
    return(

        <div class = "data">

        <div>{num}:</div>
        <Small small = {sml} name = {name}/>
        <div>{email}</div>
        {/* <div>{name}</div> */}
        

        <button class = "press delete" onClick = {() => onDelete(num)}>Delete</button>

      </div>

    )
}

export default Data