import React, {useState, useRef} from 'react';
import styled from "styled-components";

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const changeName = () => {
    setName(nameRef.current.value)
  }

  const changeAge = () => {
    const ageCurrent = ageRef.current.value.replace(/[^0-9]/g, '')
    if (ageRef.current.value !== ageCurrent) {
      alert("숫자만 입력해 주세요.")
      ageRef.current.value = "";
    }
    setAge(ageRef.current.value)
  }

  return (
    <ClickSection>
      <Title>ClickToEdit</Title>
      <div>
        이름 <InputCont type="text" ref={nameRef} onBlur={()=>{changeName()}}/>
      </div>
      <div>
        나이 <InputCont type="text" ref={ageRef} onBlur={()=>{changeAge()}}/>
      </div>
      <p>이름 {name} 나이 {age}</p>
    </ClickSection>
  );
};

export default ClickToEdit;

const ClickSection = styled.section`
  position: relative;
  width: 50%;
  max-width: 600px;
  height: 250px;
  margin: 10px 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  box-shadow: #282c34;
`

const Title = styled.h2`
  text-align: start;
  font-size: 1rem;
  margin-left: 1rem;
`

const InputCont = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  margin: 15px 10px;
  text-align: center;
  cursor: pointer;
`