import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(36, 41, 67);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Formulario = styled.form`
  padding: 10% 5%;

  label {
    font-size: 0.6em;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 3%;
  }

  textarea {
    background: rgb(42, 47, 74);
    border: none;
    height: 200px;
    resize: none;
    width: 100%;

    :focus {
      border: 1px solid #9bf1ff;
    }
  }

  textarea,
  input {
    color: white;
    font-size: 0.6em;
    padding: 1% 3%;
    font-weight: 300;

    input:focus {
      border: 1px solid #9bf1ff;
    }
  }

  .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;

    input {
      width: 100%;
      height: 45px;
      background: rgb(42, 47, 74);
      border: none;

      :focus {
        border: 1px solid #9bf1ff;
      }
    }
  }

  .campo {
    display: flex;
    flex-direction: column;
  }

  .text-area {
    margin-top: 3%;
  }

  .botoes {
    display: flex;
    flex-direction: row;
    margin-top: 5%;

    button:nth-child(2) {
      margin-left: 3%;
    }
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
`;

export const Item = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 5% 3% 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .Icon {
    height: 45px;
    width: 45px;
    color: black;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    svg {
      font-size: 1.8em;
    }
  }

  .Content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0 3%;

    h3 {
      font-size: 2em;
    }

    p,
    a {
      margin-top: 5%;
      font-size: 1.1em;
      letter-spacing: 2px;
    }

    a {
      text-decoration: underline;
      text-decoration-color: white;
      transition: 0.3s;

      :hover {
        text-decoration: none;
        color: #9bf1ff;
      }
    }
  }
`;
