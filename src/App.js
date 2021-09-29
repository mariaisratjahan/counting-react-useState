import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    
       <Counting></Counting>
    </div>
  );
}

function Counting(){
  const divStyle={
    backgroundColor:"skyblue",
    width:"50%",
    margin:"100px auto",
    padding:"50px"

  }
  const iBtn={
    backgroundColor:"orange",
    fontSize:"20px",
    padding:"10px 25px",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
  }
  const dBtn={
    backgroundColor:"pink",
    fontSize:"20px",
    padding:"10px 25px",
    border:"none",
    borderRadius:"5px",
    margin:"5px",
    cursor:"pointer"
  }
  function increaseBtnClick(getstateValue){
    console.log(state);
    const newState=state+1;
    setState(newState);
}
function decreaseBtnClick(){
  console.log(state);
    const newState=state-1;
    setState(newState);
}
  
  const [state,setState]=useState(0);
  

  return (
    <div style={divStyle}>
       <h1>count :{state}</h1>
       <button onClick={increaseBtnClick} style={iBtn}>Increase</button>
       <button style={dBtn} onClick={decreaseBtnClick}>Decrease</button>
    </div>
  );

}

export default App;
