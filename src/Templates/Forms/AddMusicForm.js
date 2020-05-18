import React, { useState } from "react";
import styled from "styled-components";
import { Drawer, Button, Empty } from "antd";
import { MusicSelector } from "../../Containers";

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

const MusicFile = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin: 1rem 0;
`;

const AddMusicForm = ({ onSubmit, onClose, visible, musicsDefault = [] }) => {
 const [musics, setMusics] = useState(musicsDefault);

 const onSumbitNPC = () => {
  onSubmit(musics);
 };

 const deleteMusic = (title) => {
  const filteredMusics = musics.filter((music) => music.title !== title);
  setMusics(filteredMusics);
 };

 return (
  <Drawer
   title="Adicionar nova Playlist"
   onClose={onClose}
   width={720}
   bodyStyle={{ paddingBottom: 80 }}
   visible={visible}
   footer={
    <Footer>
     <Button onClick={onClose} style={{ marginRight: 8 }}>
      Cancelar
     </Button>
     <Button onClick={onSumbitNPC} type="primary">
      Adicionar
     </Button>
    </Footer>
   }
  >
   <FormStyle>
    {musics.length > 0 ? (
     musics.map(({ title }, index) => (
      <MusicFile>
       <span key={index}>{title}</span>
       <Button onClick={() => deleteMusic(title)} type="danger">
        Apagar
       </Button>
      </MusicFile>
     ))
    ) : (
     <Empty />
    )}
    <MusicSelector
     onMusicAdded={(e) => {
      const newMusics = [...musics, e];
      setMusics(newMusics);
     }}
    />
   </FormStyle>
  </Drawer>
 );
};

export default AddMusicForm;
