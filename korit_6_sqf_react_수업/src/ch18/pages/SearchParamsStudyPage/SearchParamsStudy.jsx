import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    // 키 밸류 형식이면 페이지 렌더링
    // http://localhost:3000/searchparams?a=10

    const [ searchParams , setSearchParams ] = useSearchParams();
    console.log(searchParams.get("a"));
    console.log(searchParams.get("b"));
    const values = searchParams.values();

    console.log(values.next()); // 10
    console.log(values.next()); // 20
    console.log(searchParams.values().next()); // searchParams = 객체 30

    const handleClick = () => {
        const keys = searchParams.keys();
        let newParams = {};
        for(let i = 0; i < searchParams.size; i++){
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({...newParams, c: 30});
    }

    const handleClick2 = () => {
        let newParams2 = {};
        searchParams({...newParams2, a:10, b:10})
    }
    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
            <button onClick={handleClick2}>이동</button>
        </div>
    );
}

export default SearchParamsStudy;