import React, {useState} from 'react';
import styled from "styled-components";

const Toggle = () => {
  const [toggled, setToggled] = useState(false);

  const checkedHandle = (e) => {
    setToggled(e.target.checked)
  }

  return (
    <ToggleCont>
      <Title>Toggle</Title>
      <Switch>
        <Check type="checkbox" onChange={checkedHandle}/>
        <Slider/>
      </Switch>
      <p>Toggle Switch {toggled ? "ON" : "OFF"}</p>
    </ToggleCont>
  );
};

export default Toggle;

const ToggleCont = styled.section`
  width: 50%;
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

const Switch = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

const Check = styled.input`
  position: absolute;
  display: none;
  &:checked + span {
    background-color: #3700C2;
    &:before {
      left: 37px;
    }
  }
`

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 25px;
  border-radius: 100px;
  background-color: #bfbfbf;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 21px;
    transition: 0.2s;
    background-color: #fff;
  }
`