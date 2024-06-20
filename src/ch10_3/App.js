import { useRef, useState } from "react";
import "./App.css";

function App() {
    const emptyUser = {
        username: "",
        password:"",
        name: ""
    }
    const [userList, setUserList] = useState([]);
    const [inputData, setInputData] = useState(...emptyUser);


    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef(),
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13){
            const {username , password , name} = inputRef
            switch(e.target.name){
                case "username":
                    password.current.focus();    
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({ ...emptyUser });
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }


    return<>
        <input name="username" placeholder="사용자명"
        onKeyDown={handleInputKeyDown} value={inputData.username} ref={inputRef} onChange={handleInputChange}/>
        <input name="password" placeholder="비밀번호"
        onKeyDown={handleInputKeyDown} value={inputData.password} ref={inputRef} onChange={handleInputChange}/>
        <input name="name" placeholder="이름"
        onKeyDown={handleInputKeyDown} value={inputData.name} ref={inputRef} onChange={handleInputChange}/>

        <table>
                <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {
                userList.map(({username, password, name}, index) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{username}</td>
                            <td>{password}</td>
                            <td>{name}</td>
                            <button></button>
                        </tr>
                       );
                    })
                }
                </tbody>
            </table>
    </> 
}

export default App;