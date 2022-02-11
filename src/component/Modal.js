import React, {useState} from 'react';
import styled from "styled-components";

const Modal = () => {
  const [openItem, setOpenItem] = useState(false);

  const handleOpen = () => {
    setOpenItem((openItem) => !openItem)
  }

  return (
    <TabSection>
      <Title>Modal</Title>
      <OpenBtn onClick={handleOpen}>Open Modal</OpenBtn>
      {
        openItem && (
          <ModalCont>
            <ContentBox>
              <CloseBtn onClick={handleOpen}>x</CloseBtn>
              <p>Hello CODESTATES!</p>
            </ContentBox>
          </ModalCont>
        )
      }
    </TabSection>
  );
};

export default Modal;

const TabSection = styled.section`
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

const OpenBtn = styled.button`
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 25px;
  background-color: #3700C2;
  color: #fff;
  margin: 50px auto;
  cursor: pointer;
`

const ModalCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(109, 109, 109, 0.5);
  
`

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  color: #3700C2;
`

const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
`