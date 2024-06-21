import { useRef, useState } from "react";


function App() {

  const emptyUser = {
    username: "",
    password: "",
    name : ""
  }

  let mode = 1;

  const [userList , setUserList] = useState([]);
  const [userData , setUserDate] = useState({...emptyUser});
  const [editIndex, setEditIndex] = useState(null);

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

  const handleDelete = (index) =>{
    setUserList(userList => userList.filter((_, i) => i !== index));
  } 
  // const handleDelete = (index) => {
  //   setUserList(userList => [
  //     ...userList.slice(0, index),
  //     ...userList.slice(index + 1)
  //   ]);
  // };

  // handleDelete(index) 사용시

  const handleEdit = (index) =>{
    setUserDate(userList[index]);
    setEditIndex(index);
    Ref.username.current.focus();
  }

  

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
            <th>delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(({ username, password, name }, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{username}</td>
              <td>{password}</td>
              <td>{name}</td>
              <td>
                <button onClick={() => handleDelete(index)}>삭제</button>
              </td>
              <td>
                <button onClick={() => handleEdit(index)}>수정</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  
}
export default App;