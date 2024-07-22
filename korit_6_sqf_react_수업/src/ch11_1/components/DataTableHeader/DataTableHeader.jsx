import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode , setMode , setProducts ,products , setIsDeleting ,editProductId }) {
// props로 설정해서 넘김
    // 값을 입력받을 객체값과 input를 만듬
    const emptyProduct = {
        id:0, // ""
        productName : "",
        size: "",
        color:"",
        price:""
    };

    const [ inputData , setInputData ] = useState(...emptyProduct)

    useEffect(() => {
        const [ product ] = products.filter(product => product.id === editProductId); //[0]; // filter를 걸면 조건에 해당하는 한개만 꺼내옴
        setInputData(!product ? { ...emptyProduct } : { ...product });
    } , [editProductId]);

    const handleInputChange = (e) => {
        setInputData(inputData => ({          //=> ({}) 객체 리턴
            ...inputData,                     //=> {} 함수의 몸체  
            [e.target.name] : e.target.value                              
        }));
    }

    const inputRef = {
        productName : useRef(),
        size:useRef(),
        color: useRef(),
        price:useRef()
    }
    
    // const handleInputKeyDown = (e) => {
    //     const nextRef = {
    //         productName : inputRef.size,
    //         size:inputRef.color,
    //         color: inputRef.price,
    //         price:inputRef.productName
    //     };
    //     if(e.keyCode === 13){

    //         if(nextRef[e.target.name]){
    //             nextRef[e.target.name].current.focus();
    //         }

    //         if(e.target.name === "price"){
    //             handleSubmitClick();
    //         }
    //     }
    // }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13){
            if(e.target.name === "productName"){
                inputRef.size.current.focus();
            }
            if(e.target.name === "size"){
                inputRef.color.current.focus();
            }
            if(e.target.name === "color"){
                inputRef.price.current.focus();
            }
            if(e.target.name === "price"){
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    }

    // useRef 스위치
    // const handleInputKeyDown = (e) => {
    //     if(e.keyCode === 13){
    //         switch(e.target.name){
    //             case "productName" :
    //             inputRef.productName.current.focus();
    //             break;
    //             case "size" :   
    //             inputRef.size.current.focus();
    //             break;  
    //             case "color" :   
    //             inputRef.color.current.focus();
    //             break;  
    //             case "price" :
    //             inputRef.price.current.focus();
    //             break;
    //             default:
    //         }
    //     }
    // }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1){
            setProducts(products => {
               const productIds = products.map(product => product.id);
               const maxId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds); // 최대값 가져오기
               return [ ...products, // 함수밖에서 사용하는 거면 props로 받아와야함  함수내부에서 작성 시에 products를 DataTable에서 가져올 필요없음
                {...inputData, id: maxId + 1} // 가져온 배열의 길이 최대값에 inputData의 아이디값을 1올려줌
               ];
            });
            Swal.fire({
                title:"상품 정보 추가 완료",
                icon: "success",
                position:"top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();
        }
        if(mode === 2){
            Swal.fire({
                title:"상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then(result => {
                if(result.isConfirmed){
                    setProducts(products => [
                        ...products.map(product => {
                            if(product.id === editProductId) { 
                                const { id , ...rest} = inputData;
                                return {
                                    ...product, // if조건문에 따라 수정하고자하는 값만 수정됨
                                    ...rest
                                }
                            }
                            return product;
                        })
                    ]);
                resetMode();
                }
            });
        }
        if(mode === 3){
            Swal.fire({
                title:"상품 정보 삭제",
                text:"정말로 삭제하시겠습니까? ",
                showCancelButton:true,
                confirmButtonText:"삭제",
                confirmButtonColor:"red",
                cancelButtonText:"취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setIsDeleting(true); // 삭제 상태 모드
                }
            });
            alert("상품삭제")            
        }
     
    }

    const handleCancleClick = () => {
        resetMode();
    };

    const resetMode = () => { // 초기화를 정의
        setInputData({...emptyProduct}); 
        setMode(0);
    };

    return (
        <header className="table-header">
            <div className="input-group">
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="productName"
                    placeholder="상품명"
                    value={inputData.productName}
                    autoFocus
                    onChange={handleInputChange}
                    ref={inputRef.productName}
                    onKeyDown={handleInputKeyDown}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="size"
                    placeholder="사이즈"
                    value={inputData.size}
                    onChange={handleInputChange}
                    ref={inputRef.size}
                    onKeyDown={handleInputKeyDown}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="color"
                    placeholder="색상"
                    value={inputData.color}
                    onChange={handleInputChange}
                    ref={inputRef.color}
                    onKeyDown={handleInputKeyDown}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="price"
                    placeholder="가격"
                    value={inputData.price}
                    onChange={handleInputChange}
                    ref={inputRef.price}
                    onKeyDown={handleInputKeyDown}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
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