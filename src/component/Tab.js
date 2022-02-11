import React, {useState} from 'react';
import styled from "styled-components";

const Tab = () => {

  const [menuNum, setMenuNum] = useState(0);
  const [menu, setMenu] = useState([
    {id: 1, name: "Tab1", content: "Tab menu ONE", completed: true},
    {id: 2, name: "Tab2", content: "Tab menu TWO", completed: false},
    {id: 3, name: "Tab3", content: "Tab menu THREE", completed: false},
  ]);

  const onEdit = (targetId) => {
    setMenu(
      menu.map((item) => item.id === targetId ? {...item, completed: true} : {...item, completed: false})
    )
    setMenuNum(targetId - 1)
  }

  return (
    <TabSection>
      <Title>Tab</Title>
      <div>
        {
          menu.map((it) => (<TabBtn key={it.id} completed={it.completed} onClick={()=>{onEdit(it.id)}}>{it.name}</TabBtn>))
        }
      </div>
      <TabContent>{menu[menuNum].content}</TabContent>
    </TabSection>
  );
};

export default Tab;

const TabSection = styled.section`
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

const TabBtn = styled.button`
  background-color: ${({completed}) => completed ? "#3700C2" : "#D9D9D9"};
  color: ${({completed}) => completed ? "#fff" : "#939393"};
  font-weight: bold;
  border: none;
  width: 30%;
  height: 40px;
  cursor: pointer;
`

const TabContent = styled.p`
  margin-top: 50px;
`