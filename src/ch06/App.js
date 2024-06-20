import { useState } from "react";

function App() {
    
    // me
    // const [ num , setNum ] = useState({
    //     grade:"",
    //     group:"",
    //     number:"",
    //     name:"",
    // })

    // const {grade , group , number , name} = num;

    // const handleInput= (e)=> {
    //     setNum({...num,
    //     [e.target.name] : e.target.value
    //     })
    // }

    //? 강사님 답 1
    const emptyStudent = {
        grade:"",
        group:"",
        number:"",
        name:""
    }

    const [ student , setStudent ] = useState({...emptyStudent});

    const [ grade , setGrade ] = useState(0);
    const [ group , setGroup ] = useState(0);
    const [ number , setNumber ] = useState(0);
    const [ name , setName ] = useState(0);

    const handleInputChange = (e) => {
        switch(e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            default:
        }
    }

    //? 강사님 답 2
    const handleInputChange2 = (e) => {
        //setStudent(student => {
        //    return {
        //        ...student,
        //        [e.target.name] : e.target.value
        //    }
        //});

        // const name = e.target.name;
        // const value = e.target.value;
        // ↓ 
        const {name, value} = e.target;
        
        const newStudent = {
            ...student,
            [name] : value
        }
        setStudent(newStudent);
    }
    // const handleGradeInputChange = (e) => {
    //     setGrade(e.target.value);
    // }

    // const handleGroupInputChange = (e) => {
    //     setGroup(e.target.value);
    // }

    // const handleNumberInputChange = (e) => {
    //     setNumber(e.target.value);
    // }

    // const handleNameInputChange = (e) => {
    //     setName(e.target.value);
    // }
    
    
    return <>

        {/* <input onKeyDown={handleInputChange} name="grade" placeholder="학년" />
        <input onKeyDown={handleInputChange} name="group" placeholder="반" />
        <input onKeyDown={handleInputChange} name="number" placeholder="번호" />
        <input onKeyDown={handleInputChange} name="name" placeholder="이름" /> */}

        {/* <input name="grade" onChange={handleInput} placeholder="학년" />
        <input name="group" onChange={handleInput} placeholder="반" />
        <input name="number" onChange={handleInput} placeholder="번호" />
        <input name="name" onChange={handleInput} placeholder="이름" />
    
        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul> */}
    
        <input name="grade" onChange={handleInputChange2} placeholder="학년" value={student.grade} />
        <input name="group" onChange={handleInputChange2} placeholder="반"  value={student.group} />
        <input name="number" onChange={handleInputChange2} placeholder="번호" value={student.number} />
        <input name="name" onChange={handleInputChange2} placeholder="이름" value={student.name} />
    
        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>

    </>;
}

export default App;