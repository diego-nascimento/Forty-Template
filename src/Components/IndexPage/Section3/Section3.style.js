import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  background: #302c4c;
  padding: 5% 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  color: white;
  width: 100%;
  height: 100%;

  h2 {
    padding: 1% 0px;
    border-bottom: 3px solid white;
    font-size: 2em;
    position: relative;
    width: 200px;

    @media (max-width: 800px) {
      font-size: 1.2em;
    }
  }

  p {
    padding: 2% 0px 2% 0px;
    font-size: 1em;
    line-height: 1.6em;
    letter-spacing: 2px;
    font-weight: 400;

    @media (max-width: 800px) {
      font-size: 0.7em;
    }
  }
`;
