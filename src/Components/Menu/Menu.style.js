import styled, { keyframes } from 'styled-components';

const AnimationMenu = keyframes`
0%{
  transform: translateY(-60px);
  }20%{
    transform: translateY(0px);
  }
`;

export const MenuStyle = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5%;
  position: ${(props) => (props.HeaderState == 0 ? 'absolute' : 'fixed')};
  background: ${(props) =>
    props.HeaderState == 1 ? '#302c4c' : 'rgba(1, 1, 1, 0)'};
  z-index: 98;
  top: 0;
  animation: ${(props) => (props.HeaderState == 1 ? AnimationMenu : 'none')} 2s
    forwards;

  @media (max-width: 800px) {
    padding: 0px 5%;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 10px;
    }

    :hover {
      span {
        color: #9bf1ff;
      }

      strong {
        background-color: #9bf1ff;
      }
    }
  }

  strong {
    padding: 0.5rem 2rem;
    background: white;
    color: #242943;
    transition: 0.3s;

    :hover {
      background: #9bf1ff;
    }
  }

  span {
    text-transform: uppercase;
  }
`;

export const BotaoMenu = styled.a`
  cursor: pointer;
  transition: 0.2s;
  color: white;
  :hover {
    color: #9bf1ff;
    div {
      div {
        background: #9bf1ff;
      }
    }
  }
`;

export const Botao = styled.div`
  width: 20px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  transition: 0.2s;

  div {
    height: 3px;
    width: 100%;
    background: white;
  }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.MenuState ? '1' : '0')};
  visibility: ${(props) => (props.MenuState ? 'visible' : 'hidden')};
  background: rgba(36, 41, 67, 0.98);
  transition: 0.6s ease;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Lista = styled.ul`
  width: 90%;
  max-width: 400px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1.3rem;
  color: white;
  cursor: pointer;
  letter-spacing: 3px;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  :hover {
    color: #9bf1ff;
  }
`;
