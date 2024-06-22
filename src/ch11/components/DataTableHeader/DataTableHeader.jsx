import "./style.css";

function DataTableHeader({ mode , setMode }) { // props로 설정해서 넘김
    
    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1){
            alert("상품추가")
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
    }

    return ( 
        <header className="table-header">
            <div className="input-group">
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="상품명" autoFocus />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈" />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="색상" />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="가격" />
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