import { useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";

function DataTable() {    
    const [ mode , setMode ] = useState(0); // 0 = 조회 , 1 = 추가 , 2 = 수정, 3 = 삭제
    const [ products , setProducts] =useState([...SAMPLE_PRODUCTS]);

    const [newProduct , setNewProduct] = useState({
        id: 0 , 
        productName: "",
        size : "",
        color:"",
        price:0
    }); 

    const handleAddProduct = () => {
        setProducts([...products, {...newProduct, id:products.length + 1}]);
        setNewProduct({
            id:0,
            productName:"",
            size:"",
            color:"",
            price:0
        })
        setMode(0);
    }
    return ( 
        <div className="table-main-container">
            <DataTableHeader 
            mode={mode} 
            setMode={setMode}
            newProduct={newProduct} 
            setNewProduct={setNewProduct}
            handleAddProduct={handleAddProduct}/>
            <DataTableBody 
            mode={mode} 
            products={products} />
        </div>
     );
}

export default DataTable;