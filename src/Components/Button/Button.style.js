import styled from 'styled-components';

export const ButtonStyle = styled.button`
  color: ${(props) => (props.Color == '1' ? 'black' : 'white')};
  background: ${(props) => (props.Color == '1' ? 'white' : 'rgba(1,1,1, 0)')};
  font-size: 1em;
  padding: 0px 1rem;
  height: 3em;
  cursor: pointer;
  transition: 0.2s;
  border: 3px solid white;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${(props) => (props.Size ? props.Size : '100%')};
  max-width: 100%;

  :hover {
    border: 3px solid #9bf1ff;
    background: ${(props) =>
      props.Color == '1' ? '#9bf1ff' : 'rgba(1,1,1, 0)'};
    color: ${(props) => (props.Color == '1' ? 'black' : '#9bf1ff')};
  }
`;
