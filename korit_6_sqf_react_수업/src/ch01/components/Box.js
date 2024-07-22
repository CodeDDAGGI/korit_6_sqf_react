function Box({name, isShow, children}) {
    
    const result = true && !!10; {/* true && 10 일떄 10이 return*/} 
    {/* const result = false && 10;  true && 10 일떄 10이 return*/} 
    
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        {/* {null}  null, true, false 는 문자로 안봄 
         (렌더링안댐) 사용하려면 " "문자열 감싸야댐*/}
        {/* {false ? <h3>true</h3> : null} */}
        {/* result */}
        {/*  true && 10 */}
        {isShow && <h3>안녕하세요</h3>} {/* JSX에서는 false는 렌더링X true면 <h3>안녕하세요</h3> 리턴 */}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>} 
    </div>
}

export default Box;