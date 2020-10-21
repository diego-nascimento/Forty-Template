import React from 'react';
import { Container, Content, Formulario, Lista, Item } from './Contato.style';
import Botao from '../../Button/Button';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

export default function Contato() {
  return (
    <Container>
      <Content>
        <Formulario>
          <div className="inputs">
            <div className="campo">
              <label htmlFor="name">NAME</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="campo">
              <label htmlFor="email">EMAIL</label>

              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="text-area">
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="botoes">
            <Botao Color="1" Size={'300px'}>
              send message
            </Botao>
            <Botao Size={'150px'}>Clear</Botao>
          </div>
        </Formulario>
        <Lista>
          <Item>
            <div className="Icon">
              <MdEmail />
            </div>
            <div className="Content">
              <h3>Email</h3>
              <a href="">information@untitled.tld</a>
            </div>
          </Item>
          <Item>
            <div className="Icon">
              <FaPhone />
            </div>
            <div className="Content">
              <h3>Phone</h3>
              <p>(000) 000-0000 x12387</p>
            </div>
          </Item>
          <Item>
            <div className="Icon">
              <AiFillHome />
            </div>
            <div className="Content">
              <h3>Address</h3>
              <p>1234 Somewhere Road #5432</p>
              <p>Nashville, TN 00000</p>
              <p>United States of America</p>
            </div>
          </Item>
        </Lista>
      </Content>
    </Container>
  );
}
