import React from 'react';
import { Container, Letreiro } from './Painel.style';
import Button from '../../Button/Button';
import { BsArrowRight } from 'react-icons/bs';
import { GlobalContext } from '../../../GlobalContext/Context';

export default function Painel() {
  const Menuref = React.useRef();
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (Menuref.current.getBoundingClientRect().bottom <= 0) {
        global.setheaderState(1);
      } else {
        global.setheaderState(0);
      }
    });
  });

  return (
    <Container ref={Menuref}>
      <Letreiro className="highSize">
        <div className="Titulo">
          <h1>Forty, Third, Second</h1>
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
