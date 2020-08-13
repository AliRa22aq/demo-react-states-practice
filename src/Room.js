import React, {useState} from 'react';
import './Room.css';


function Room() {
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(26);
    let [temp, setTemp] = useState(22);
    


    return (
    <div className = {"room "+(isLit? "lit":"dark")}>
        The Room is {isLit? "lit":"dark"}
        <br />
        <button onClick={() => setLit(!isLit)} > ON/OFF </button>
        <br />
        <br />
        Age: {age}
        <br />
        <br />
        <button onClick={() => setAge(age+1)} > Increase Age </button>
        <br />
        <button onClick={() => setAge(age-1)} > Decrease Age </button>
        <br />
        <button onClick={() => setAge(0)} > Set Zero </button>
        <br />
        <button onClick={() => setAge(50)} > Set Hundered </button>
        <br />
        <br />
        Current temeprature: {temp}
        <br />
        <button onClick={() => setTemp(temp+1)} > + </button>  
        <button onClick={() => setTemp(22)} > Default </button>
        <button onClick={() => setTemp(temp-1)} > - </button>
    </div>
  );
}

export default Room;
