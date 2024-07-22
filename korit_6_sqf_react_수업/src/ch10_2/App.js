import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name:""
    }

    const [ userList , setUserList] = useState([]);

    const [ userData , setUserData] = useState({...emptyUser});

    const Ref = {
        username:useRef(),
        password:useRef(),
        name:useRef()
    }

    const handleInputKeyDown = (e) => {
        const {username, password, name} = Ref;
        if(e.keyCode === 13){
            switch(e.target.name){
                case "username" :
                password.current.focus();    
                break;
                case "password" :
                name.current.focus();
                break;
                case "name" :
                setUserList(userList =>
                    [...userList, userData]);
                setUserData({...emptyUser});
                username.current.focus();
                break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setUserData(userData => {
            return {
                ...userData,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleEditClick = (key, index) => {
        Swal.fire({
            title:`${key} edit`,
            input:"text",
            inputValue:userList[index][key],
            showCancelButton:true,
            cancelButtonText:"취소",
            confirmButtonText:"확인"
        }).then(result => {
            if(result.isConfirmed){
                setUserList(userList => {
                    setUserList(userList => [...userList.map((user, i) => {
                        if(i ===index){
                            return {
                                ...user,
                                [key]:result.value
                            }
                        }
                        return user;
                    })])
                })
            }
        })
    }
    
    // 배열.map((value , index) => {return}) // 배열안의 값들을 모두 함수 돌려서 새로운 배열에 옮김
    // 배열.filter((value , index) => {return}) // 배열안의 값을 중 조건에 맞는 것만 새로운 배열에 옮김

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))]);
            }
        });
    }
    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 
                그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={userData.username}
            ref={Ref.username} />
        <input name="password" placeholder="비밀번호" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={userData.password}
            ref={Ref.password} />
        <input name="name" placeholder="이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={userData.name}
            ref={Ref.name} />

        {/* 
            3. tbody -> tr묶음을 userList에서 map통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
        */}

        
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{password}</td>
                                <td>{name}</td>
                            </tr>
                        );
                    })
                }
                
            </tbody>
        </table>
    </>
}

export default App;