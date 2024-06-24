import "./style.css";
import { useState , useEffect } from "react";

function DataTableBody({ mode , products }) {
    const [ viewProducts, setViewProducts ] = useState([]); 
    
    const [ checkedAll , setCheckedAll ] = useState(false);

    useEffect(() => {
        if(mode === 0){
            resetViewProduct();
            setCheckedAll(false);
        }
    } , [products, mode])

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked); // viewProducts의 상태가 바뀌고 난 다음에 false의 확인이 가능함
        if(checkStates.includes(false)) { // contains랑 비슷함
                setCheckedAll(false);
            }else{
                setCheckedAll(true); 
        }
    },[viewProducts])

    const resetViewProduct = () => {
        // props로 받은 product를 가지고와야댐
        setViewProducts([...products.map(product => ({ ...product, isChecked:false }))]);
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checkedAll) { //true
                setViewProducts([...products.map(product => ({ ...product, isChecked:true }))]);
            } else {
                resetViewProduct();
            }
            return !checked // true
        });
    }

    const handleCheckedChange = (e) => { // 상태 변화 체크
        if(mode === 2) 
            setViewProducts(viewProducts => {
                // 새로운 리스트 생성
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)){
                        return {
                            ...product,
                            isChecked : !product.isChecked
                        }
                    }
                return {
                    ...product,
                    isChecked : false
                }
                })]
            });
        }

        if(mode === 3) {
            setViewProducts(viewProducts => {
                // 새로운 리스트 생성
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)){
                        return {
                            ...product,
                            isChecked : !product.isChecked
                        }
                    }
                return product;
                })]
            });
        }
    


    
    return ( 
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
                                disabled={mode !== 3} 
                                onChange={handleCheckedAllChange}
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (        
                        <tr key={product.id}>
                            <th>
                                <input 
                                type="checkbox" 
                                disabled={mode === 0 || mode === 1} 
                                checked = {product.isChecked}
                                // true | false 상태관리
                                onChange ={handleCheckedChange}
                                value ={product.id} 
                                />
                            </th>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.size}</td>
                            <td>{product.color}</td>
                            <td>{product.price}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default DataTableBody;