import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 600px;
  background-image: url('painel.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    height: 500px;
  }

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(36, 41, 67, 0.9);
    top: 0;
    left: 0;
  }
`;

export const Letreiro = styled.div`
  height: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 800px) {
    
  }

  .Titulo {
    display: flex;
    width: 100%;
    padding: 40px 0px;
    border-bottom: 2px solid white;

    h1 {
      font-size: 2em;
    }
  }

  .Subtitulo {
    width: 100%;
    padding: 30px 0px;
    display: flex;
    flex-direction: row;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
  p {
    font-size: 0.5em;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 2em;
    margin-right: 2vw;
    width: 35%;

    @media (max-width: 1250px) {
      width: 100%;
    }
    @media (max-width: 750px) {
      width: 100%;
      margin: 0 0 20px 0;
    }
  }
`;
