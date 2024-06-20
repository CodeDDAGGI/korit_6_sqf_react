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

<<<<<<< HEAD
function Button({ text ,number, setNumber}) {

  const handleClick = () => {
    if(text === "증가"){
        setNumber(number + 1);
    }
    if(text === "감소"){
        setNumber(number - 1);
    }
  } 
   
  return <button onClick={handleClick}>{text}</button>
}

export default Button;
=======
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
  
  
>>>>>>> 4a50ef7679fc650b60767d9c9461e02a69a0c403
