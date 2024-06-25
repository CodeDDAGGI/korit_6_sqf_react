import { useState } from 'react';

function App() {
    const [ imgSrc , setImgSrc] = useState("");

    const handleLoadImgClick = () => {

        const fileElement = document.createElement("input");
        fileElement.setAttribute("type" , "file");
        // fileElement.setAttribute("multiple" , true);
        fileElement.click();
        
        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            // FileReader 객체를 만드는 이유
            // file의 값을 읽을 수 있는 객체 생성
            const fileReader = new FileReader();
            
            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }

            // file URl값을 읽어오기
            fileReader.readAsDataURL(file); // click();

        }
    }


    return ( 
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={false} /> {/* css 속성 적용 X */}
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
    );
}

export default App;