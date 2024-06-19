// function Button({ text , setNumber}) {
  
//   const handleClick = () => {
//     if(text === "증가"){
//         setNumber(number => number + 1);
//     }
//     if(text === "감소"){
//         setNumber(number => number - 1);
//     }
//   } 
   
//   return <button onClick={handleClick}>{text}</button>
// }

// export default Button;

function Button({ text ,num, setNumber}) {
  
    const handleClick = () => {
      if(text === "증가"){
          setNumber(num + 1);
      }
      if(text === "감소"){
          setNumber(num - 1);
      }
    } 
     
    return <button onClick={handleClick}>{text}</button>
  }
  
  export default Button;
  
  