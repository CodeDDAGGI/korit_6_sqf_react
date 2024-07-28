import axios from 'axios';
import React, { useState } from 'react';

function RegisterColorPage() {

    const [ color , setColor] = useState({
        colorName: ""
    });

    const handleColorChange = (e) => {
        setColor(color=>{
            return{
                ...color,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmitClick = async() => {
        try{
            const response = await axios.post("http://localhost:8080/api/v1/color", color);
            console.log(response);
        }catch(error){
            console.log(error);
        }

        setColor(color => {
            return{
                colorName: ""
            }
        })
    }

    return (
        <div>
            <h1>컬러 등록 페이지</h1>
            <p>
               <label htmlFor="">컬러 이름</label>
               <input type="text" 
                    name='colorName'
                    onChange={handleColorChange}
                    value={color.colorName}/>
            </p>
            <p>
                <button onClick={handleSubmitClick}>저장하기</button>
            </p>
        </div>
    );
}

export default RegisterColorPage;