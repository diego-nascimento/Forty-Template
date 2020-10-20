import React from 'react';
import { MenuStyle, BotaoMenu, Botao, Modal, Lista, Item } from './Menu.style';
import { FiX } from 'react-icons/fi';
import WhiteButton from '../WhiteButton/WhiteButton';
import ColorButton from '../ColorButton/ColorButton';

export default function Menu() {
  const [MenuState, setMenuState] = React.useState(0);

  return (
    <>
      <Modal onClick={() => setMenuState(0)} MenuState={MenuState}>
        {MenuState ? (
          <>
            <FiX
              style={{
                color: 'white',
                fontSize: '40px',
                position: 'absolute',
                right: '20px',
                cursor: 'pointer',
                top: '10px',
              }}
            />

            <Lista>
              <Item>Home</Item>
              <Item>Landing</Item>
              <Item>Generic</Item>
              <Item>Elements</Item>
              <Item>
                <ColorButton>Login</ColorButton>
              </Item>
              <Item>
                <WhiteButton>Get Started</WhiteButton>
              </Item>
            </Lista>
          </>
        ) : null}
      </Modal>
      <MenuStyle>
        <a href="">
          <strong>Forty</strong>
          <span> BY DIEGO</span>
        </a>
        <BotaoMenu onClick={() => setMenuState(1)}>
          Menu
          <Botao>
            <div></div>
            <div></div>
            <div></div>
          </Botao>
        </BotaoMenu>
      </MenuStyle>
    </>
  );
}
