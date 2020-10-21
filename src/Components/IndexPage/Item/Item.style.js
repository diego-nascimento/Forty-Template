import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .modal {
    position: absolute;
    background: ${(props) => props.Bg};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
    transition: 0.5s;
    z-index: 80;

    :hover {
      opacity: 0.2;
    }
  }
`;

export const Letreiro = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5%;
  height: 100%;
  flex-direction: column;
  color: white;
  padding: 0 10%;
  opacity: 1;

  h2 {
    font-size: 1em;
    padding-bottom: 2%;
    text-transform: capitalize;
    opacity: 1;
    z-index: 95;
  }

  p {
    font-size: 0.5em;
    letter-spacing: 3px;
    padding-top: 2%;
    border-top: 2px solid white;
    text-transform: upperCase;
    opacity: 1;
    z-index: 95;
  }
`;
