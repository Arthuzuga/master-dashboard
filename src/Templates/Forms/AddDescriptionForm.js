import React, { useState } from "react";
import styled from "styled-components";
import { Drawer, Button, Checkbox, Input } from "antd";
import { TitleInfo } from '../../Component'

const { TextArea } = Input;

const Footer = styled.div`
 text-align: right;
`;

const FormStyle = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 justify-content: flex-start;
 align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`

const AddMusicForm = ({ onSubmit, onClose, visible}) => {
 const [description, setDescription] = useState("");
 const [isSpeak, setIsSpeak] = useState(false);

 const onSumbitDescription = () => {
  onSubmit({
    id: Math.random() *1000,
    text: description,
    isSpeak
  });
 };



 return (
  <Drawer
   title="Adicionar nova Descrição ao Capítulo"
   onClose={onClose}
   width={360}
   bodyStyle={{ paddingBottom: 80 }}
   visible={visible}
   footer={
    <Footer>
     <Button onClick={onClose} style={{ marginRight: 8 }}>
      Cancelar
     </Button>
     <Button onClick={onSumbitDescription} type="primary">
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
     <Wrapper> 
        <TitleInfo>Texto:</TitleInfo>
        <TextArea autoSize onChange={({target:{value}}) => setDescription(value)}/>
      </Wrapper>
        <TitleInfo>
          <span>Será trecho narrado?</span>
          <Checkbox checked={isSpeak} onChange={() => {
            const value = !isSpeak
            setIsSpeak(value)
            }}/>
        </TitleInfo>

   </FormStyle>
  </Drawer>
 );
};

export default AddMusicForm;
