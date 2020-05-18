import React, { useState } from "react";
import styled from "styled-components";
import { Drawer, Button, Empty } from "antd";

const Footer = styled.div`
 text-align: right;
`;

const FormStyle = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
 align-items: center;
`;

const ChallengeDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin: 1rem 0;
`;

const AddChallengeForm = ({ onSubmit, onClose, visible, challengesDefault = [] }) => {
 const [challenges, setChallenges] = useState(challengesDefault);

 const onSumbitChallengeList = () => {
  onSubmit(challenges);
 };

 const deleteChallenge = (title) => {
  const filteredChallenges = challenges.filter((music) => music.title !== title);
  setChallenges(filteredChallenges);
 };

 return (
  <Drawer
   title="Adicionar nova Lista de Desafios"
   onClose={onClose}
   width={720}
   bodyStyle={{ paddingBottom: 80 }}
   visible={visible}
   footer={
    <Footer>
     <Button onClick={onClose} style={{ marginRight: 8 }}>
      Cancelar
     </Button>
     <Button onClick={onSumbitChallengeList} type="primary">
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    {challenges.length > 0 ? (
     challenges.map(({ title }, index) => (
      <ChallengeDiv>
       <span key={index}>{title}</span>
       <Button onClick={() => deleteChallenge(title)} type="danger">
        Apagar
       </Button>
      </ChallengeDiv>
     ))
    ) : (
     <Empty />
    )}
   </FormStyle>
  </Drawer>
 );
};

export default AddChallengeForm;
