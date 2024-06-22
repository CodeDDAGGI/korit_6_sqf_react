import "./style.css";

function DataTableHeader({ mode , setMode , newProduct, setNewProduct, handleAddProduct}) { // props로 설정해서 넘김
    

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleOnChangeClick = (e) => {
        const {name , value} = e.target;
        setNewProduct(addProduct => ({
            ...addProduct,
            [name] : value
        }))
    }
    const handleSubmitClick = () => {
        if(mode === 1){
            handleAddProduct();
            alert("상품추가") // map

        }
        if(mode === 2){
            //
            alert("상품수정")
            
        }
        if(mode === 3){

            alert("상품삭제")            
        }
        resetMode();
    }
    
    const handleCancleClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setNewProduct({id:0, productName:"", size:"", color:"", price:0});
    }

    const {productName , size , color , price} = newProduct;

    return ( 
        <header className="table-header">
            <div className="input-group">
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="상품명" autoFocus name="productName" value={productName} onChange={handleOnChangeClick}/>
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈" name="size" value={size} onChange={handleOnChangeClick} />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="색상" name="color" value={color} onChange={handleOnChangeClick} />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="가격" name="price" value={price} onChange={handleOnChangeClick} />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">  {/* 모드 버튼 */}
                            <button onClick={handleChangeModeClick} value={1} >추가</button>
                            <button onClick={handleChangeModeClick} value={2} >수정</button>
                            <button onClick={handleChangeModeClick} value={3} >삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCancleClick}>취소</button>
                        </div>
                    )
                }
            </div>
        </header>
     );
}

export default DataTableHeader;