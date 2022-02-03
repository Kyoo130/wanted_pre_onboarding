import React, {useState, useRef} from 'react';

const ClickToEdit = () => {
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const changeName = () => {
    console.log(nameRef.current.value)
    setName(nameRef.current.value)
  }

  const changeAge = () => {
    console.log(ageRef.current.value)
    setAge(ageRef.current.value)
  }

  return (
    <div>
      <h2>ClickToEdit</h2>
      <div>
        이름 <input type="text" ref={nameRef} onChange={()=>{changeName()}}/>
      </div>
      <div>
        나이 <input type="text" ref={ageRef} onChange={()=>{changeAge()}}/>
      </div>
      <p>이름 {name} 나이 {age}</p>
    </div>
  );
};

export default ClickToEdit;
