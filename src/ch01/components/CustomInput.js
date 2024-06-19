function CustomInput({ph , disabled , value}) { // 객체:구조 분해 할당
  return  <input type="text" placeholder={ph} disabled={disabled} value={value}/>
}

CustomInput.defaultProps = {
    ph: "test",
    disabled: "false",
    value: "빈값"
}

export default CustomInput;
