import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import  {SAMPLE_PRODUCTS}  from "../../constants/sampleProducts";

function DataTable() {    // 부모
    const [ mode , setMode ] = useState(0); // 0 = 조회 , 1 = 추가 , 2 = 수정, 3 = 삭제
    const [ products , setProducts] = useState([...SAMPLE_PRODUCTS]);
    const [ isDeleting , setIsDeleting ] = useState(false);
    const [ editProductId , setEditProductId ] = useState(0);

    useEffect(() => {
        const lsProducts = localStorage.getItem("products"); // products 키값을 가져옴
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts)) // !lsProducts:null
    }, []);

    useEffect(() => {
            localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return ( 
        <div className="table-main-container">
            <DataTableHeader 
                mode={mode} 
                editProductId={editProductId}
                products={products}
                setMode={setMode} 
                setProducts={setProducts} 
                setIsDeleting={setIsDeleting}
            />
            <DataTableBody 
                mode={mode} 
                setMode={setMode} 
                products={products}  
                setProducts={setProducts} 
                isDeleting={isDeleting} 
                setIsDeleting= {setIsDeleting}
                setEditProductId={setEditProductId}
            />
        </div>
     );
}

export default DataTable;