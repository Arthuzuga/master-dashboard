import React from "react";
import styled from "styled-components";

const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 8px;
 background-color: white;
 padding: 4rem;
 text-align: center;
`;

const Home = () => {
 return (
  <Container>
   <h1>SEJA BEM-VINDO AO DASHBOARD MASTER</h1>
   <img
    src="https://i.pinimg.com/originals/26/49/de/2649defe625da3bb301529b2d39e763b.png"
    width="128px"
    alt="dice"
   />
   <h2>Avisos:</h2>
   <p>
    Esta versão trata-se de uma prova de conceito visual, e de interação
    navegador apenas, sem conexão com servidor, suas alterações não serão salvas
    ao fechar ou ao recarregar a página
   </p>
   <h3>Aviso para o futuro:</h3>
   <p>
    Para que nossa plataforma continue gratuita, por favor insira a URL das
    imagens que for usar nos campos apropriados
   </p>
   <p>
    As URLs podem ser do google drive/dropbox/pinterest ou de qualquer
    armazenador pessoal que possua
   </p>
   <h3>Divirta-se com a plataforma</h3>
   <p>
    Para feedbacks por favor, mande mensagem para o meu Twitter:
    <a href="https://twitter.com/JoaoA_Tavares"> @JoaoA_Tavares</a>
   </p>
   <h3>
    Special thank you to Kevin MacLeod by the free musics on @incompetech
   </h3>
  </Container>
 );
};

export default Home;
