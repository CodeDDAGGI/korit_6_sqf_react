/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useInput } from "../../hooks/useInput";

function CustomHookPage(props) {
    const usernameInput = useInput("text", 20);
    const passwordInput = useInput("", 10);

    // useInput 1개일때
    // const { value  , onChange} = useInput("text" ,20)

    // useState 썻을때
    // const [ value , setValue ] = useState("");

    // const handleChange = (e) => {
    //     if(e.target.value.length < 21){
    //         setValue(e.target.value)
    //     }
    // }

    return (
        <div>
            <input type="text" onChange={usernameInput.onChange} value={usernameInput.value} />
            <input type="text" onChange={passwordInput.onChange} value={passwordInput.value} />
        </div>
    );
}

export default CustomHookPage;