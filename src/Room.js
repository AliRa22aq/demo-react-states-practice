import React, {useState} from 'react';
import './Room.css';


function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(26);
    let [temp, setTemp] = useState(22);
    


    return (
    <div className = {"room "+(isLit? "lit":"dark")}>
        <br />     
        The Room is {isLit? "lit":"dark"} <br /> Press button to change that :)
        <br />
        <br />
        <button onClick={() => setLit(!isLit)} > ON/OFF </button>
        <br />
        <br />
    
        Age: {age}
        <br />
        <br />
        <button onClick={() => setAge(age-1)} > - </button>
        <button onClick={() => setAge(0)} > Set Zero </button>
        <button onClick={() => setAge(50)} > Set Fifty </button>
        <button onClick={() => setAge(age+1)} > + </button>
        <br />
        <br />

        Current temeprature: {temp} *C
        <br /> <br />
        <button onClick={() => setTemp(temp-1)} > - </button>  
        <button onClick={() => setTemp(22)} > Default </button>
        <button onClick={() => setTemp(temp+1)} > + </button>
        <br /> <br />
        
        <div className="name"> Made by Ali </div>

        

    </div>
  );
}

export default Room;
