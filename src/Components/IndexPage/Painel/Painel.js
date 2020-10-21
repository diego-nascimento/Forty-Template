import React from 'react';
import { Container, Letreiro } from './Painel.style';
import Button from '../../Button/Button';
import { BsArrowRight } from 'react-icons/bs';

export default function Painel() {
  return (
    <Container>
      <Letreiro className="highSize">
        <div className="Titulo">
          <h1>Hi, My Name is Forty</h1>
        </div>
        <div className="Subtitulo">
          <p>
            A ALIQUET DIAM ALIQUAM INTEGER AT CUBILIA SED ALIQUAM LOREM DIS
            EGESTAS COMMODO.
          </p>
          <Button Size={'300px'}>
            Get Started
            <BsArrowRight
              style={{
                fontSize: '80px',
                height: '30px',
              }}
            />
          </Button>
        </div>
      </Letreiro>
    </Container>
  );
}
