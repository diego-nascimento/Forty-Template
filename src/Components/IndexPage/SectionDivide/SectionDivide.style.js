import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.State == 1 ? '2fr 3fr' : '3fr 2fr'};
  width: 100%;
  height: 550px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    height: 300px;
  }
`;
