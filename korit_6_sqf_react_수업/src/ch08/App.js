import { useRef } from "react";

function App() {
        const inputRef = {
            a: useRef(),
            b: useRef(),
            c: useRef()
        }
        
        // use는 함수안에 들어갈 수 없음
        // 훅 함수는 해당 함수의 최상단
        // const aRef = useRef();
        // const bRef = useRef();
        // const cRef = useRef();

        // console.log(aRef);
        // console.log(bRef);
        // console.log(cRef);

        // const inputs = document.querySelectorAll("input");
        // 리액트에서 사용시 버츄얼돔을 거치지않고 직접 접근함

    const handleKeyDown=(e)=> {

        if(e.keyCode === 13){
            switch(e.target.name){
                case "a":
                    // useRef 사용시엔 current는 필수 사용
                    inputRef.b.current.focus(); 
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }
    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>
    </>
}

export default App;