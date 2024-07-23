import React, { useState } from 'react';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../constants/productOtions';
import axios from 'axios';

function PostPage2() {
    const [ product, setProduct ] = useState({
        productName:"",
        price: "",
        sizeId: "",
        colorId: ""
    });

    const handleInputChange = (e) => {
        setProduct(product => {
            return {
                ...product,
                [e.target.name ]: e.target.value
                }
        })
    }

    const handleSubmitClick = async () => {
        try{
            const response = await axios.post("http://localhost:8080/basic/product" , product); // promise 앞에만 await에 걸 수 있음 이 구문이 than처리와 같음
            // post("http://localhost:8080/basic/product" 리턴 자료형이 promise
            console.log(response);
        }catch(error) {
            console.log(error);
        }

    }
    
    return (
        <>
          <header>
            <h1>비동기 데이터 통신(POST2)</h1>  
          </header>  
          <main>
            <h3>상품등록</h3>
            <p>
                <label htmlFor="">상품명</label>
                <input type="text" 
                    name='productName'
                    onChange={handleInputChange} />
            </p>
            <p>
                <label htmlFor="">가격</label>
                <input type="text" 
                    name='price'
                    onChange={handleInputChange} />
            </p>
            <p>
                <label htmlFor="">사이즈</label>
                <select name='sizeId'onChange={handleInputChange} >
                    {
                        SIZE_OPTIONS.map(size =>
                        <option key={size.id} value={size.id}>{size.name}</option>)
                        // 버츄얼 돔 key값을 주면 부분 렌더링이 됨
                    }
                </select>
            </p>
            <p>
                <label htmlFor="">색상</label>
                <select name='colorId' onChange={handleInputChange} >
                    {
                        COLOR_OPTIONS.map(color =>
                        <option key={color.id} value={color.id}>{color.name}</option>)
                    }  
                </select>
            </p>
            <p>
                <button onClick={handleSubmitClick}>등록하기</button>
            </p>
          </main>
        </>
    );
}

export default PostPage2;