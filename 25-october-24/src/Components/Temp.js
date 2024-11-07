import React,{useContext} from 'react';
import NamesContext from '../Context/NamesContext';

function Temp() {
    const {names}=useContext(NamesContext);
    console.log(names);
  return (
    <div>Temp</div>
  )
}

export default Temp

// What is useEffect???
// useEffect is something which run when the component mounts and when any state change?