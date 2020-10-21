import styled from 'styled-components';

export const Container = styled.footer`
  background: #282c44;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 5vh 0px;
    font-size: 0.4em;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 3px;
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
`;

export const Item = styled.li`
  color: #282c44;
  background: white;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: #9bf1ff;
  }

  :not(:first-child) {
    margin-left: 1vw;
  }

  svg {
    font-size: 1.4em;

    @media (max-width: 800px) {
      font-size: 2em;
    }
  }
`;
