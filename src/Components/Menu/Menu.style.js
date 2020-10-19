import styled from 'styled-components';

export const MenuStyle = styled.nav`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 0px 20px;

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
  width: 100vw;
  height: 100vh;
  background: rgba(36, 41, 67, 0.9);
`;
