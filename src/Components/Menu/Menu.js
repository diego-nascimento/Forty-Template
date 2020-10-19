import React from 'react';
import { MenuStyle, BotaoMenu, Botao, Modal } from './Menu.style';

export default function Menu() {
  const [MenuState, setMenuState] = React.useState(0);

  function handleClick() {
    if (MenuState == 0) {
      setMenuState(1);
    } else {
      setMenuState(0);
    }
  }
  return MenuState ? (
    <Modal>teste</Modal>
  ) : (
    <MenuStyle>
      <a href="">
        <strong>Forty</strong>
        <span> BY DIEGO</span>
      </a>
      <BotaoMenu onClick={handleClick}>
        Menu
        <Botao>
          <div></div>
          <div></div>
          <div></div>
        </Botao>
      </BotaoMenu>
    </MenuStyle>
  );
}
