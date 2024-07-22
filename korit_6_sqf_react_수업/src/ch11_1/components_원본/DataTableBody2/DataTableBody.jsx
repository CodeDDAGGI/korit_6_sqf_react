import "./style.css";
import { useState , useEffect } from "react";

function DataTableBody({ mode , setMode, products , isDeleting, setIsDeleting , setProducts}) {
    // 상태값
    const [ viewProducts, setViewProducts] = useState([]);

    const [checkedAll , setCheckedAll] = useState(false);

    useEffect(()=> {
        if(!isDeleting){
            resetviewProducts();
            setCheckedAll(false);
        }
    },[products, mode]);

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)){
            setCheckedAll(false);
        }else{
            setCheckedAll(true)
        }
    },[viewProducts]);

    useEffect(()=> {
        if(isDeleting) {
            setProducts([...viewProducts.filter(viewProducts => viewProducts.isChecked === false).map(viewProducts => {
                const {isChecked, ...product} = viewProducts
                return product;
            })
        ]);
        setMode(0);
        setIsDeleting(false);
        }
    }, [isDeleting])

    const resetviewProducts = () => {
        setViewProducts([...products.map(product => ({
            ...product, isChecked:false
        }))])
    }

    const handleCheckAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([...products.map(product => ({...product, iseChecked : true}))]);
            } else {
                resetviewProducts();
            }
            return !checked;
        })
    }

    const handleCheckedChange = (e) => {

        if(mode === 2){
            setViewProducts(viewProducts => {
                return [...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)){
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        isChecked:false
                    }
                })]
            });
        }

        if(mode === 3){
            setViewProducts(viewProducts => {
                return [...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)){
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        
                        }
                    }
                    return product;
                })]
            })
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
                                onChange={handleCheckAllChange}
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