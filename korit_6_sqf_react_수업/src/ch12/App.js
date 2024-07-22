import { useEffect, useState } from "react";

function App() {
    const [ number , setNumber ] = useState(0);
    const [ number2 , setNumber2] = useState(0);
    const [ number3 , setNumber3] = useState(0);

    // [] 빈 값 넣을시 최초 세팅 (한번만 실행)
    useEffect(() => { // 실행할 함수 , [] 디펜던시 ( 어떤 상태가 변화하면 ) , 첫 호출때 한번 실행이 됨
        // 마운트 지점
        setNumber3(number * 10)    // 디펜던시가 변화하면 실행될 함수
        return () => {
            // 언마운트 지점
        }
    }, [number]); // 0 * 10 첫 렌더링
    /* number2 , number3 , number 4 여러개 기입가능 */

    const handleButtonClick = (e) => {
        setNumber(a => a + 2);
        }
    
    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }
    
    return ( 
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
     );
}

export default App;