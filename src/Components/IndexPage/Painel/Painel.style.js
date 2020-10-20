import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
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

  @media(max-width: 800px){
    width: 90%;
  }

  .Titulo {
    display: flex;
    width: 100%;
    padding: 40px 0px;
    border-bottom: 2px solid white;

    h1 {
      font-size: 4rem;

      @media(max-width: 1200px){
        font-size: 3.5em;
      }
      @media(max-width: 700px){
        font-size: 2.5em;
      }

      @media(max-width: 500px){
        font-size: 2em;
      }

      @media(max-width: 370px){
        font-size: 1.5em;
      }
    }
  }

  .Subtitulo {
    width: 100%;
    padding: 30px 0px;
    display: flex;
    flex-direction: row;
    
    @media(max-width: 700px){
        flex-direction: column; 
      }

    }
    p {
      font-size: 1.1em;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 1.8rem;
      margin-right: 5px;
      width: 35%;

      @media(max-width: 1250px){
        font-size: 1em;
        width: 100%;
      }
      @media(max-width: 750px){
        font-size: .9em;
        width: 100%;
        margin: 0 0 20px 0;
      }

      @media(max-width: 500px){
        font-size: .8em;
      }

      @media(max-width: 370px){
        font-size: .7em;
      }
    }
  }
`;
