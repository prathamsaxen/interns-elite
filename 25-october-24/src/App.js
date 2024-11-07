import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
// import Card from './Components/Card';
import NamesContext from "./Context/NamesContext";

function App() {
  const [number, SetNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [condition,setCondition]=useState(0);
  // ... spread operator
  // Accessible, Set The accessible value , Third One is used to provide the initial value
  // Props - Proprties

  useEffect(() => {
    console.log("number 1 - ", number);
  }, [number]);

  // Depenedecy arrya [] - first time page renders 
  // Dependecn  

  useEffect(() => {
    console.log("number 2 - ", number2);
  }, [number2]);

  // const names=['Pratham Saxena','Ankit','Harsh','Madhavi','Akshit', 'new user'];

  const PlusFunction = () => {
    SetNumber(number + 1);
  };

  const MinusFunction = () => {
    setNumber2(number2 - 1);
  };
  return (
    <div className="App">
      {/* <NamesContext.Provider value={{names}}> */}
      {/* <div className='container'>
          <button onClick={PlusFunction}>Plus</button>
          <p>{number}</p>
          <button onClick={MinusFunction}>Minus </button>
          <Test name={name}/>
        </div> */}

      {/* Code Reusability */}
      {/* <Card name='Pratham'/>
        <Card name='Akshit'/>
        <Card name='Ankit'/>
        <Card name='Harsh'/>
        <Card name='Madhavi'/> */}
      {/* 
        {
          names.map((item,index)=>{
            return(
              <Card name={item} key={index}/>
            )
          })
        } */}

      {/* Context API  */}
      {/* </NamesContext.Provider> */}
      {/* Conditional Rendering - We have an Concept of render some data element or compoentns on the confitions */}
      {/* <button onClick={PlusFunction}>Number 1</button>
      <button onClick={MinusFunction}>Number 2</button> */}

      {
        condition===0?<h1>Condition is true</h1>:<h1>Condition is false</h1>
      }

      <button onClick={()=>setCondition(!condition)}>Change Condition</button>
    </div>
  );
}

export default App;

// Map Function!
