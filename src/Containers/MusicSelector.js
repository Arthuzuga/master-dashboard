import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Select, Button } from "antd";
import playlists from "../mock/playlist";

const AudioContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;
const SelectContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

const { Option } = Select;

const MusicSelector = ({ onMusicAdded }) => {
 const [categoryList, setCategoryList] = useState([]);
 const [category, setCategory] = useState("Selecione uma Categoria");
 const [musicList, setMusicList] = useState([]);
 const [music, setMusic] = useState("Selecione uma Música");
 const [isMusicLoaded, setMusicLoading] = useState(false);

 useEffect(() => {
  const categories = playlists.map((playlist) => playlist.name);
  setCategoryList(categories);
 }, []);

 const handleCategory = (categorySelected) => {
  setCategory(categorySelected);
  const musics = playlists
   .filter((playlist) => playlist.name === categorySelected)
   .flatMap((playlistFiltered) => playlistFiltered.songs);
  setMusicList(musics);
 };
 const handleMusic = (musicSelected) => {
  setMusicLoading(true);
  setCategory(musicSelected);
  const musicFiltered = musicList.filter(
   (music) => music.title === musicSelected
  );
  setMusic(musicFiltered[0]);
  setTimeout(() => {
   setMusicLoading(false);
  }, 1000);
 };

 return (
  <AudioContainer>
   <SelectContainer>
    <Select defaultValue={category} onChange={handleCategory}>
     {categoryList.map((categoryItem, index) => (
      <Option key={index} value={categoryItem}>
       {categoryItem}
      </Option>
     ))}
    </Select>
    <Select
     defaultValue={music}
     onChange={handleMusic}
     disabled={musicList.length > 0 ? false : true}
    >
     {musicList.map(({ title }, index) => (
      <Option key={index} value={title}>
       {title}
      </Option>
     ))}
    </Select>
   </SelectContainer>
   {!isMusicLoaded && music.track_id && (
    <>
     <audio controls>
      <source
       src={music.track_id}
       type="audio/mpeg"
       loop={music.loop}
       title={music.title}
      />
     </audio>
     <Button
      type="primary"
      onClick={() => onMusicAdded(music)}
      style={{ borderRadius: "20px" }}
     >
      +
     </Button>
    </>
   )}
  </AudioContainer>
 );
};

export default MusicSelector;
