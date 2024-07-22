import { useState } from "react";

function App() {
    
    const emptyUser ={
        username:"",
        password:"",
        email:""
        }
        
    const [user , setUser] = useState(...emptyUser);
    // input 만들시 상태를 만들어야댐
    // input은 입력을 받을라면 name 필요
    const [inputData, setInputData] = useState(...emptyUser);

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleOkClick = () => {
        setUser(inputData);
    }

    return <>                                                                       
        <input name="username" placeholder="사용자이름" onChange={handleInputChange} value={inputData.username} />
        <input name="password"placeholder="비밀번호" onChange={handleInputChange} value={inputData.password} />
        <input name="email" placeholder="이메일" onChange={handleInputChange} value={inputData.email} />
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li >사용자 이름 : {user.username}</li>
            <li >비밀번호 : {user.password}</li>
            <li >이메일 : {user.email}</li>
        </ul>
    </>;
}

export default App;