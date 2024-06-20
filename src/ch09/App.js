import { useState } from "react";

function App() {
    const [ inputValue , setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13){ // 리턴 ↓
            setNames(names => [...names, inputValue ]);
            e.target.value = "";
            setInputValue("");
        }
    }

    return <>
        <input 
            onChange={handleInputChange} 
            onKeyDown={handleInputKeyDown} 
            value={inputValue}/>
        <ul>
            {liList}
            {names.map((name,index) => <li key={index}>{name}</li>)} {/* join을 하지않아도 배열을 알아서 처리해줌 
            map을 사용시 key값 필수 */}
        </ul>
    </> 

}

export default App;