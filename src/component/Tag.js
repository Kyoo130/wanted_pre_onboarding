import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";

const Tag = () => {
  const [text, setText] = useState([
    {id: 1, content: "CodeStates"},
    {id: 2, content: "JJang"},
  ]);

  const tagRef = useRef(null);

  useEffect(() => {
    tagRef.current.value = "";
  }, [text]);

  const handleAdd = () => {
    const itemId = text.length + 1;
    const item = tagRef.current.value;
    console.log(itemId)
    setText([...text, {id: itemId, content: item}])
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <TagSection>
      <Title>Tag</Title>
      <TagCont>
        {
          text.map(tag => <TagItem key={tag.id}>{tag.id}.{tag.content}</TagItem>)
        }

        <TagInput type="text" placeholder="Press enter to add tags" ref={tagRef} onKeyPress={onKeyPress} />


      </TagCont>

      {/*<button onClick={handleAdd}>추가</button>*/}
    </TagSection>
  );
};

export default Tag;

const TagSection = styled.section`
  width: 50%;
  height: 250px;
  margin: 10px 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  box-shadow: #282c34;
`

const Title = styled.h2`
  font-weight: bold;
`

const TagCont = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #bdbdbd;
  margin: auto;
`

const TagItem = styled.div`
  background-color: #3700C2;
  color: #fff;
  margin: 5px 5px;
  padding: 0.5rem;
  border-radius: 5px;
`


const TagInput = styled.input`
  border: none;
  flex: 1;
`