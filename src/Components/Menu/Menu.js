import React from 'react';
import { MenuStyle, BotaoMenu, Botao, Modal, Lista, Item } from './Menu.style';
import { FiX } from 'react-icons/fi';
import Button from '../Button/Button';
import { GlobalContext } from '../../GlobalContext/Context';

const Menu = () => {
  const [MenuState, setMenuState] = React.useState(0);

  const Global = React.useContext(GlobalContext);

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
                <Button Color={1}>Login</Button>
              </Item>
              <Item>
                <Button Color={0}>Get Started</Button>
              </Item>
            </Lista>
          </>
        ) : null}
      </Modal>
      <MenuStyle HeaderState={Global.MenuPosition}>
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
};

export default Menu;
