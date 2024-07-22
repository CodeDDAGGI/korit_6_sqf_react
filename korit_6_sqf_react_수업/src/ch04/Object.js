import { useState } from "react";

function Object() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  })

  const {name, age, email} = user;

  const handleChange = (e) => {  
      setUser({
        ...user,
        [e.target.name] : e.target.value
      })
      console.log(e.target.name);
      console.log(e.target.value);
      console.log([e.target.value]);
  }
  

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}  // 구조 분해 할당된 변수 사용
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}  // 구조 분해 할당된 변수 사용
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}  // 구조 분해 할당된 변수 사용
        onChange={handleChange}
      />
    </>
  )
}

export default Object;