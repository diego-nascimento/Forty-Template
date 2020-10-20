import styled from 'styled-components';

export const ButtonStyle = styled.button`
  color: white;
  background: rgba(1, 1, 1, 0);
  padding: 1rem 3rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
  border: 3px solid white;
  letter-spacing: 2px;

  :hover {
    border: 3px solid #9bf1ff;
    color: #9bf1ff;
  }
`;
