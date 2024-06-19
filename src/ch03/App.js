import { useState } from "react";

function App() {
  const [ num , setNum ] = useState(0);

  let num2 = 0;

  // 함수안에 함수정의(화살표함수)
  const handleClick = (e) => {
    const value = parseInt(e.target.value);
    setNum(num + value); // n(num) => n(num) + value (useState 최적화)
    num2 += value;
    console.log(num2);
}  
    console.log(num);
    console.log(num2);

  // 함수자체를 onClick에 대입   
  // 상태 변화가 되어야 함수의 재호출(App)이 일어남 (처음부터 끝까지: 재렌더링)
  // 조건을 안 넣고 set에 값을 넣어주면 상태변화로 재랜더링하기때문에 무한루프돔
  // 일반 변수는 변화를 줘도 함수의 재호출 되지않음 
  // 화면이 바뀌면 초기화
  return <>
        <h1>번호 : {num}</h1>
        <h1>번호 : {num2}</h1>
        <button onClick={handleClick} value={-10}>+10</button>
        <button onClick={handleClick} value={+10}>-10</button>
        <button onClick={handleClick} value={+100}>+100</button>
        <button onClick={handleClick} value={-100}>-100</button>
    </>
}

export default App;

