import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  background: rgb(42, 47, 74);
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
    font-size: 0.8em;
    position: relative;
    width: 200px;
  }

  p {
    padding: 2% 0px 2% 0px;
    font-size: 0.5em;
    line-height: 1.6em;
    letter-spacing: 2px;
    font-weight: 400;
  }
`;
