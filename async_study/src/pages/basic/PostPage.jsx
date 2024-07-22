import React from 'react';
import useInput from '../../hooks/useInput'
import axios from 'axios';

function PostPage() {

    const schoolNameInput = useInput();  // 커스텀 훅 (객체)
    const departmentInput = useInput();  // input의 핸들러를 여러개 만들 필요가 없음 
    const gradeInput = useInput(); 
    const nameInput = useInput(); 

    const schoolInput = useInput();
    const phoneNumberInput = useInput();
    const addressInput = useInput();
    const teachernameInput = useInput();

    const handleSubmit = () => {
        const student = {
            schoolName : schoolNameInput.value,
            department : departmentInput.value,
            grade : gradeInput.value,
            name : nameInput.value
        } 


        // fetch("http://localhost:8080/basic/student", {
        //     method:"post",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(student)
        // }).then(response => {
        //     response.json().then(responseData => { // json 호출시 promise
        //         console.log(responseData); // 응답이 안되면 404, 405뜸
        //     })
        // })
    
        axios.post("http://localhost:8080/basic/student", student) // 기본 json 요청 stringfy해서 건네줌
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

        }

    const handleTeacherInfo = () => {
        const teacher = {
            schoolName : schoolInput.value,
            phoneNumber : phoneNumberInput.value,
            address: addressInput.value,
            name: teachernameInput.value
        }

        axios.post("http://localhost:8080/basic/teacher" , teacher)
        .then(response => { // 승인
            console.log(response.data); // ResponseEntity.ok().body("응답데이터") 출력
        }).catch(error => { // 거부
            console.log(error); // teacher
        }) // finally 항상 실행
    }
        

    return (
        <div>
            <header>
                <h1>비동기 데이터 통신(POST)</h1>
            </header>
            <main>
                <h3>학생정보</h3>
                <p>
                    {/* htmlFor :  */}
                    <label htmlFor="">학교명 : </label>
                    <input type="text" 
                        onChange={schoolNameInput.onChange} 
                        value={schoolNameInput.value} />
                </p>
                <p>
                    <label htmlFor="">학과명 : </label>
                    <input type="text" 
                        onChange={departmentInput.onChange} 
                        value={departmentInput.value}
                    />
                </p>
                <p>
                    <label htmlFor="">학년 : </label>
                    <input type="text" 
                        onChange={gradeInput.onChange} 
                        value={gradeInput.value}
                    />
                </p>
                <p>
                    <label htmlFor="">이름 : </label>
                    <input type="text" 
                        onChange={nameInput.onChange} 
                        value={nameInput.value}
                    />
                </p>
                <p>
                    <button onClick={handleSubmit}>전송</button>
                </p>

                <h3>선생님 정보</h3>
                <p>
                    {/* htmlFor :  */}
                    <label htmlFor="">학교명 : </label>
                    <input type="text" 
                        onChange={schoolInput.onChange} 
                        value={schoolInput.value} />
                </p>
                <p>
                    <label htmlFor="">연락처 : </label>
                    <input type="text" 
                        onChange={phoneNumberInput.onChange} 
                        value={phoneNumberInput.value}
                    />
                </p>
                <p>
                    <label htmlFor="">주소 : </label>
                    <input type="text" 
                        onChange={addressInput.onChange} 
                        value={addressInput.value}
                    />
                </p>
                <p>
                    <label htmlFor="">이름 : </label>
                    <input type="text" 
                        onChange={teachernameInput.onChange} 
                        value={teachernameInput.value}
                    />
                </p>
                <p>
                    <button onClick={handleTeacherInfo}>전송</button>
                </p>
            </main>
        </div>
    );
}

export default PostPage;