import React, {useState} from 'react';


function Room() {
    const [isLit, setLit] = useState(false);
    const [age, setAge] = useState(26);
    function updateLit() {
        console.log("Button Clicked");
    }
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
    </div>
  );
}

export default Room;
