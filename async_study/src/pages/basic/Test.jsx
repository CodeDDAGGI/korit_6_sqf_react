import axios from 'axios';
import React, { useState } from 'react';

function Test(props) {
    const [ product, setProduct] = useState({
        productName: "",
        price: "",
        sizeName: "",
        color: ""
    });

    const handleChange = (e) => {
       setProduct(product => {
            console.log(e.target.value);
        return {
            ...product,
            [e.target.name] : e.target.value 
        }
       })
    }

    const handleSubmit = async() => {
        try{
            const request = await axios.post("/http://localhost:8080/basic/test" ,product)
            console.log(request);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <header>test</header>
            <p>
                <label htmlFor="">상품명</label>
                <input type="text" onChange={handleChange} name="productName"/>
            </p>
            <p>
                <label htmlFor="">가격</label>
                <input type="text" onChange={handleChange} name="price" />
            </p>
            <p>
                <label htmlFor="">사이즈</label>
                <input type="text" onChange={handleChange} name='sizeName'/>
            </p>
            <p>
                <label htmlFor="">색상</label>
                <input type="text" onChange={handleChange} name='color'/>
            </p>
            <button onClick={handleSubmit}>제출하기</button>
        </div>
    );
}

export default Test;
