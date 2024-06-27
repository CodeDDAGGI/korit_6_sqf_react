import { useEffect, useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const emptyUser = {
        id:0,
        name:"",
        email:"",
        src:""
    }

    const [ userData, setUserData ] = useState({...emptyUser})
    const [ userList , setUserList ] = useState([]);
    const [ srcImg , setSrcImg ] = useState(""); 

    const handleInputData = (e) => {
        setUserData({
            ...userData,
        [e.target.name]: e.target.value
        })
    }

    const Ref = {
        name: useRef(),
        email:useRef(),
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            if(e.target.name === "name"){
                Ref.password.current.focus();
            }
            if(e.target.password === "password"){
                Ref.name.current.focus();
            }        
        }
    }   

    useEffect(()=> {
        const lsData = localStorage.getItem("userList");
        if(lsData){
            setUserList(JSON.parse(lsData));
        }
    },[])

    const handleImgClick = () => {
        Swal.fire({
            title:"프로필 이미지 변경",
            text:"프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText:"예",
            cancelButtonText:"아니오"
        }).then(result => {
            if(result.isConfirmed){
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type" , "file");
                fileElement.click();
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    
                    fileReader.onload = (e) => {
                        setSrcImg(e.target.result);
                        setUserData(userData => ({
                            ...userData,
                            src: e.target.result
                        }));
                    }
                    fileReader.readAsDataURL(file);
                }
            }
        })
    }

    const handleOnClickSave = (e) => {
        const setlsData = localStorage.setItem("userList" );
        JSON.stringify([setlsData]);
    }
    return ( 
        <div>
            <div className="main">
                <h1>프로필</h1>
                <div className="profil-container">
                <div onClick={handleImgClick} className="profil">
                    <img src={srcImg} alt="" />
                </div>
                </div>
                <div className="profil-div">
                    <p>이름</p>
                    <input name="name" value={userData.name} onChange={handleInputData} onKeyDown={handleKeyDown} ref={Ref.name}/>
                    <p>이메일</p>
                    <input name="email" value={userData.email} onChange={handleInputData} onKeyDown={handleKeyDown} ref={Ref.email}/>
                    <div>
                    <button className="saveButton" onClick={handleOnClickSave} ref={Ref.save}>저장</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default App;