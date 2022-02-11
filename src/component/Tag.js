import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";

const Tag = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const dataTag = useRef(null);

  useEffect(() => {
    dataTag.current.value = "";
  }, [data]);

  const onCreate = () => {
    if (dataTag.current.value.length < 1) {
      alert('한글자 이상 입력해주세요.')
      return;
    }
    const newItem = {id: dataId.current, content: dataTag.current.value}
    dataId.current += 1;
    setData([...data, newItem])

  }

  const onDelete = (targetId) => {
    const newTagItem = data.filter((it) => it.id !== targetId);
    setData(newTagItem)
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onCreate()
    }
  }

  return (
    <TagSection>
      <Title>Tag</Title>
      <TagCont>
        {
          data.map((it) => {
            return (
              <TagItem key={it.id}>
                {it.content} <RemoveBtn onClick={()=>{
                  onDelete(it.id)
              }}>x</RemoveBtn>
              </TagItem>
            )
          })
        }

        <TagInput type="text" placeholder="Press enter to add tags" ref={dataTag} onKeyPress={onKeyPress} />


      </TagCont>
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
  text-align: start;
  font-size: 1rem;
  margin-left: 1rem;
`

const TagCont = styled.div`
  width: 80%;
  max-height: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #bdbdbd;
  margin: 60px auto;
  overflow-x: hidden;
  overflow-y: auto;
`

const TagItem = styled.div`
  background-color: #3700C2;
  color: #fff;
  margin: 5px 5px;
  padding: 0.5rem;
  border-radius: 5px;
  height: 20px;
`


const TagInput = styled.input`
  border: none;
  flex: 1;
  margin: 5px 5px;
  padding: 0.5rem;
  height: 20px;
`

const RemoveBtn = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  vertical-align: center;
`