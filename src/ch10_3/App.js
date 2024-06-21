import { useRef, useState } from "react";
import "./App.css"
import Swal from "sweetalert2";

function App() {
  const test = {
    a: "aaa",
    b: "bbb"
  }
//   console.log(test["a"]); 객체에서는 key값을 "a" 
  console.log(test.a);

  const emptyUser = {
    username: "",
    password: "",
    name : ""
  }

  const [userList , setUserList] = useState([]);
  const [userData , setUserDate] = useState({...emptyUser});

  const Ref = {
    username:useRef(),
    password:useRef(),
    name:useRef()
  }

  const handleInputKeyDown =(e) =>{
    const {username , password , name } = Ref;
    if(e.keyCode === 13){
      if("username" === e.target.name){
        password.current.focus();
      }
      if("password" === e.target.name){
        name.current.focus();
      }
      if("name" === e.target.name){
        username.current.focus();
        setUserList(userList => [...userList, userData]);
        setUserDate({...emptyUser});

        // if ("name" === e.target.name) {
        //   if (editIndex !== null) {
        //     // 수정 모드일 때
        //     setUserList(userList => {
        //       const newUserList = [...userList];
        //       newUserList[editIndex] = userData;
        //       return newUserList;
        //     });
        //     setEditIndex(null);
        //   } else {
        //     // 새 항목 추가 모드일 때
        //     setUserList(userList => [...userList, userData]);
        //   }
        //   setUserData({ ...emptyUser });
        //   username.current.focus();
        }
      }
      }
    
  

  const handleInputChange = (e) =>{
    setUserDate(userData => {
      return {
        ...userData,
        [e.target.name] : e.target.value
      }})
  }

  const handleEditClick = (key , index) =>{
    Swal.fire({
        title: `${key} edit`,
        input: "text",
        inputValue: userList[index][key],
        //        배열의 인덱스 참조 |객체 안의 key값엔 문자열
        showCancelButton:true,
        cancelButtonText:"취소",
        confirmButtonText:"확인"
    }).then(result => {
        console.log(result);
        if(result.isConfirmed){     //          user:value  i:index  map은 리스트형태에만 사용가능
            setUserList(userList => [ ...userList.map((user, i) => { // userList배열에 객체를 가져와서 배열의 위치
                if(i === index) {   // 조건이 맞으면 리턴에서                              
                    return {        // index에 순서에 맞는 user 객체에
                        ...user,    // key값에 result.value값을 넣음
                                    // 새로운 주소에 값을 넣을때만 사용 (주소의 값을 같이참조하는 경우엔 스프레드x)
                        [key]: result.value // username 클릭시 key username을 가져와서 result.value를 대입해줌
                    }                       // setUserList가 변경이 되면 userList를 새로 렌더링됨
                }
                return user;
            }) ]);
        }
    });
  }
  

  const handleDeleteClick = (e) =>{
    Swal.fire({
        title: "사용자 삭제",
        text: "해당 사용자를 삭제하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText : "삭제",
        cancelButtonText:"취소",
        confirmButtonColor:"red",
        cancelButtonColor:"blue"
    }).then(result => {
        if(result.isConfirmed) {
            setUserList(userList => [ ...userList.filter((user , index) => index !== parseInt(e.target.value))])
                                    //filter                                    조건부
        }
    });
    } 
    
    // if(window.confirm("해당 사용자를 삭제하시겠습니까?")){ // javaScript에선 window생략가능
    //     setUserList(userList => [ ...userList.filter((user , index) => index !== parseInt(e.target.value))]) // userList의 모든 요소를 가져와
    // }

  // const handleDelete = (index) => {
  //   setUserList(userList => [
  //     ...userList.slice(0, index),
  //     ...userList.slice(index + 1)
  //   ]);
  // };

  // handleDelete(index) 사용시

  return <>
      <input  name="username" placeholder="유저이름" 
      onKeyDown={handleInputKeyDown} ref={Ref.username} value={userData.username}
      onChange={handleInputChange} />
      <input  name="password" placeholder="비밀번호" 
      onKeyDown={handleInputKeyDown} ref={Ref.password} value={userData.password}
      onChange={handleInputChange} />
      <input  name="name" placeholder="이름" 
      onKeyDown={handleInputKeyDown} ref={Ref.name} value={userData.name}
      onChange={handleInputChange} />
  
  <table>
        <thead>
          <tr>
            <th>index</th>
            <th>username</th>
            <th>password</th>
            <th>name</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
            {/* () => handleEditClick("username" , index) 함수 정의 */}
            {/* handleEditClick("username" , index) 함수 호출 (렌더링 동작 동시에 호출)*/}
          {userList.map(({ username, password, name }, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td onClick={() => handleEditClick("username" , index)}>{username}</td>
              <td onClick={() => handleEditClick("password" , index)}>{password}</td>
              <td onClick={() => handleEditClick("name" , index)}>{name}</td>
              <td>
                <button value={index}>수정</button>
              </td>
              <td>
                {/* map 을 이용해 userList를 만들때 해당 index를 가져옴 */}
                <button onClick={handleDeleteClick} value={index}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  
}
export default App;