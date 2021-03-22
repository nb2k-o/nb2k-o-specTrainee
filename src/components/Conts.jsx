import Data from './Data'

  const Conts = ({conts,onDelete}) => {
   
      return (
        <>
          {conts.map((cont) => ( 
             <Data  num = {cont.id} sml = {cont.sml} name = {cont.name} email = {cont.email} onDelete = {onDelete} />
             
          ))}
        </>
      );
    };

  export default Conts 