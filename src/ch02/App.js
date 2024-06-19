import { useState } from "react";

function App() {

    const numberState = useState(100); //[첫번째 값, 두번째값] 가진 배열을 리턴함

    // [100 , function()]
    const [number, SetNumber] = useState(100); 
    const [ name , setName ] = useState(null);
    
    const [ test, testPrint ] = 
        [100 , function(){console.log("test함수 호출");}];

    testPrint();
    // 버츄얼 돔
    console.log(number);

    if(number === 100) { 
        setTimeout(() =>{SetNumber(200)},2000);
        // 상태 변화 > 상태 변화 때 함수 재호출(재렌더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다
    }
    
    if(number === 200){
        SetNumber(300); // Number에 300을 넣고 출력
        console.log(number); // number 200이 출력되고 300이 들어가면 함수를 재호출해서 300이 출력
        // userState의 setter는 비동기
    }

    if(name === null) {
        setName("김준일");
        }
    console.log(name);
    // return이 먼저 출력된 이휴 : 비동기로 실행
    return (
    <>
    <h1>number 상태 확인</h1>
    <h2>{number}</h2>
    </>
    )
}
export default App;