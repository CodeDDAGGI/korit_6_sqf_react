/*
  ! 컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  ? JSX
  &  1. 태그를 열었으면 닫아야한다.
  &  2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
  &  3. JSX안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다 .

  */
import "./App.css"
import Box from "./components/Box";
import CustomInput from "./components/CustomInput";
import Hello from "./components/Hello";

function App() { //? 대문자 시작
  const name = "김준일";
  const fontColorRed = { // 객체를 넣어줌
    color: "red"
  };

  const age = <h2>{31}</h2>

  return (
    // Fregment : <></>
    // style={{객체}}
    // className 사용하는 이유 
    // js의 class랑 충돌이 날수 있어서 className 사용
    // return 안에 문자열이 아님
    <> 
    
      <div>
          <Hello></Hello>
          <Hello />
      </div>
      {/* <div>
          <Hello></Hello>
          <Hello />
      </div> */}
      <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1> 
      <CustomInput ph={"이름"} disabled ={true} value={"김준일"}/>
      <CustomInput ph={"나이"} disabled ={false}/>
      <CustomInput ph={"연락처"} disabled ={true}/> {/* 함수고 매개변수의 값을 전달 */}
      <Box name={"김준일"} isShow={true}> 
        <h2>{31}</h2>  {/* Box 안에 자식요소로 넣으면 children 이 생김 */}
        <h2>{31}</h2>  {/* 자식 요소로 여러개 있을땐 children으로 묶임 */}
        <h2>{31}</h2>  {/* props = 컴포넌트의 매개변수,속성들 */}
      </Box>
      
    </>
  )
}

export default App;
