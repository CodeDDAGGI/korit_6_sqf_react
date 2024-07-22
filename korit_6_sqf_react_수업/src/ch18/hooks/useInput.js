import { useState } from "react";

export function useInput(defaultValue, length ) {
    const [ value , setValue ] = useState(defaultValue);
    // 함수안에 hook을 사용하면 hook함수
    // 함수명에 use 붙이면 hook

    const onChange = (e) => {
        if(e.target.value.length < length + 1){
            setValue(e.target.value);
        }
    }

    return {
        "value" : value,
        "setValue":setValue,
        "onChange":onChange
        // value,
        // setValue
        // onChage
    }
}