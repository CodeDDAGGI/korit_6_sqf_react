import { useState } from "react";
import Button from "./Button";
import Object from "./Object";


function App()  {

    const [ number , setNumber ] = useState(0);

    return (
        <>
        <h1>번호: {number} </h1>
        <Button text={"증가"} num ={number} setNumber={setNumber} />
        <Button text={"감소"} num ={number} setNumber={setNumber} />
        <div>
        <Object/>
        </div>
    </>
    );
};

export default App;