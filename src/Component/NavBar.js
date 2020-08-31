import React, { useRef, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

const NavBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  position: absolute;
  visibility: hidden;
`;

const NavBar = styled.nav`
  width: ${({ width }) => (width ? width : "16rem")};
  top: 0;
  right: -${({ width }) => (width ? width : "16rem")};
  height: 100%;
  position: absolute;
  box-shadow: -8px 0px 5px -4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:last-child {
    width: 100%;
    padding: 2rem 1rem 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px -8px 5px -4px rgba(0, 0, 0, 0.25);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  height: 2rem;
  width: 25%;
  background-color: ${({ cancel }) => (cancel ? "#9d0208" : "#f48c06")};
  color: #fafafa;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ cancel }) => (cancel ? "#6a040f" : "#e85d04")};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 0.5rem;
  }
`;

const Drawer = ({
  width = "20rem",
  onClose = () => {},
  visible = false,
  onSubmit = () => {},
  children
}) => {
  const NavRef = useRef();
  const WrapperRef = useRef();

  const Clicked = useCallback(() => {
    if (NavRef) {
      if (NavRef.current.style.right !== "0px") {
        NavRef.current.style = css`
          background-color: white;
          right: 0;
          width: ${width};
          transition: all 600ms ease-in-out;
        `;
        WrapperRef.current.style = css`
          visibility: visible;
          background-color: rgba(0, 0, 0, 0.15);
          transition: all 600ms ease-in-out;
        `;
      }
    }
  }, [width, NavRef, WrapperRef]);

  const Submit = () => {
    onSubmit();
    Close();
  };

  const Close = useCallback(() => {
    onClose();
    NavRef.current.style = css`
      background-color: rgba(0, 0, 0, 0.15);
      right: -${width};
      width: 0px;
      transition: all 600ms ease-in-out;
    `;
    WrapperRef.current.style = css`
      visibility: hidden;
      transition: all 600ms ease-in-out;
    `;
    document
      .querySelector("#navbar")
      .querySelectorAll("input")
      .forEach(i => {
        i.value = "";
      });
  }, [NavRef, WrapperRef, width, onClose]);

  useEffect(() => {
    if (visible) {
      Clicked();
    }
  }, [Clicked, visible]);

  return (
    <NavBarWrapper
      width={width}
      id="navbarContainer"
      onClick={() => Close()}
      ref={WrapperRef}
    >
      <NavBar
        width={width}
        id="navbar"
        ref={NavRef}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Content>{children}</Content>
        <ButtonDiv>
          <Button onClick={Close} cancel={true}>
            Cancelar
          </Button>
          <Button onClick={Submit}>Finalizar</Button>
        </ButtonDiv>
      </NavBar>
    </NavBarWrapper>
  );
};
export default Drawer;
