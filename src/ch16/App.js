import { useEffect, useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const emptyUser = {
        id:0,
        name:"",
        email:""
    }

    const Ref ={
        name: useRef(),
        email:useRef(),
        save:useRef()
    };
    const [ srcImg , setSrcImg ] = useState("");
    const [ userData , setUserData ] = useState({...emptyUser});
    const [ userList, setUserList] = useState([]);

    const handleInputData = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            if(e.target.name === "name"){
                Ref.email.current.focus();
            }
            if(e.target.email ==="email"){
                Ref.save.current.focus();
            }
        }
    }

    useEffect(() => {
        const lsuserList = localStorage.getItem("userList");
        setUserData(!lsuserList ? [] : JSON.parse(lsuserList))
    }, []);

    // useEffect(() => {
        

    // }, [userData]);

    const handleOnClickSave= () => {
        setUserList([
            ...userList,
            {...userData, id:userList.length + 1}
        ]);
        localStorage.setItem("userList" , 
            JSON.stringify([...userList, 
                { ...userData, id: userList.length + 1 }]));
        setUserData({...emptyUser})

    
    }

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
                fileElement.setAttribute("type","file");
                fileElement.click();
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();

                fileElement.onload = (e) => {
                    setSrcImg(e.target.result);
                };

                fileReader.readAsDataURL(file);
            }
            }
        })
    }

    return ( 
        <div>
            <div className="main">
                <h1>프로필</h1>
                <div className="profil-container">
                <div onClick={handleImgClick} className="profil">
                    <img src={srcImg} alt="프로필사진" />
                </div>
                </div>
                <div className="profil-div">
                    <p>이름</p>
                    <input name="name" value={userData.name} onChange={handleInputData} onKeyDown={handleKeyDown} ref={Ref.name}/>
                    <p>이메일</p>
                    <input name="email" value={userData.email} onChange={handleInputData} onKeyDown={handleKeyDown} ref={Ref.email}/>
                    <div>
                    <button onClick={handleOnClickSave} ref={Ref.save}>저장</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default App;