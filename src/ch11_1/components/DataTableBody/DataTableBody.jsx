import { useEffect, useState } from "react";
import "./style.css";


function DataTableBody({ mode, setMode, products , isDeleting, setIsDeleting , setProducts ,setEditProductId}) {
    // const [ isChecks, setChecks ] = useState([]);
    const [ viewProducts, setViewProducts ] = useState([]); // 체크확인하려고
    const [ checkedAll, setCheckedAll ] = useState(false);

    // const add = (a, b) => ({ }) { 함수의 실행 }  ({ 객체 : 값 })
    // products 또는 mode가 변했을 때 resetChecked() 실행
    // 상태값을 변화만 주는데는 set만 가져와도됨 (캡슐화)
    useEffect(() => {
        if(!isDeleting){
            resetviewProducts();
            setCheckedAll(false);
        }
    }, [products, mode])

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) { // 대체 for문 
            setCheckedAll(false);
        }else {
            setCheckedAll(true);
        }
    },[viewProducts]);

    useEffect(() => {
        if(isDeleting) {
            setProducts([...viewProducts
                .filter(viewProducts => viewProducts.isChecked === false)
                .map(viewProducts => {
                    const { isChecked , ...product } = viewProducts;    // rest문법
                                                                        // viewProducts에서 isChecked를 
                                                                        //제외한 나머지 속성들만 새로운 객체(product)로 만듬
                    return product;
                })
            ]);
            setMode(0);
            setIsDeleting(false);
        }
    },[isDeleting])

    useEffect(() => {
        if(mode === 2){
            const [ selectedProduct ] = viewProducts.filter(product => product.isChecked);
            
            setEditProductId(!selectedProduct ? 0 : selectedProduct.id);
        }                   // 최초실행 undefinded
    },[viewProducts])

    // 체크 모두 풀기 // isChecked : false다풀어
    const resetviewProducts = () => {
        setViewProducts([ ...products.map(product => ({...product, isChecked : false}))]); // 외부 props인 products를 받아옴
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([ ...products.map(product => ({...product, isChecked : true}))]);
            } else {
                resetviewProducts();
            }
            return !checked;
        });
    }

    // 삭제를 위한 체크
    const handleCheckedChange = (e) => {

        if(mode === 2) { // 수정 ( 다중선택 안됨 )
            setViewProducts(viewProducts => { // 배열이라서 자기자신을 가져오려면 배열로 리턴해야댐
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) { // e.target.value = product.id
                        return {
                            ...product,
                            isChecked: !product.isChecked  // 자기자신 선택, 다른 위치 선택시 (토글기능)
                        } 
                    }
                    return {
                        ...product,
                        isChecked: false
                    }
                }) ]
            });
        }

        if(mode === 3) { 
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) { // e.target.value = product.id
                        return {
                            ...product,
                            isChecked: !product.isChecked // 토글기능
                        }
                     }
                    return product; // 나머지 그대로 리턴
                }) ]
            });
        }
        

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
                        viewProducts.map(product => ( // 리턴값 자리
                            <tr key={product.id}>
                                <th><input 
                                    type="checkbox" 
                                    disabled={mode === 0 || mode === 1} 
                                    checked={product.isChecked} 
                                    onChange={handleCheckedChange}
                                    value={product.id}
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