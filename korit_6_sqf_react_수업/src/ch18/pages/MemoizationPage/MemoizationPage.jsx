import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [value, setValue] =useState(0);
    const [value2, setValue2] =useState(0);
    const [ num, setNum ] =useState(0);
    
    const a = useMemo(()=> {
        console.log(num);
        return num + 10
    } , [num]);

    const b = num + 20;

    let c = null;
    useEffect(()=> { // useEffect는 리턴값이 없고,
        c = num + 30;
                     // 디펜더시가 변화하면 처음부터 랜더링을 하기때문에 초기화가 된다
    },[num])

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    },[]) // 최초의 한번 재정의
    
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    } // 렌더링될때마다 재정의

    const handleClick = useCallback(() => {
        setNum(parseInt(value))
    },[value])

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>        
        </div>
    );
}

export default MemoizationPage;