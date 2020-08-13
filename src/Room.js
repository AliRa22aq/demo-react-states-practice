import React, {useState} from 'react';


function Room() {
    const [isLit, setLit] = useState(false);
    const [age, setAge] = useState(26);
    const [temp, setTemp] = useState(22);

    return (
    <div>
        The Room is {isLit? "lit":"dark"}
        <br />
        Age: {age}
        <br />
        <button onClick={() => setLit(!isLit)} > ON/OFF </button>
        <br />
        <button onClick={() => setAge(age+1)} > Increase Age </button>
        <br />
        <button onClick={() => setAge(age-1)} > Decrease Age </button>
        <br />
        <button onClick={() => setAge(0)} > Set Zero </button>
        <br />
        <button onClick={() => setAge(100)} > Set Hundered </button>
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
