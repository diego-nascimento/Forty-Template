import React from 'react';
import { Container, FooterStyle, Lista, Item } from './Footer.style';

import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
      <FooterStyle className="highSize">
        <Lista>
          <Item>
            <TiSocialTwitter />
          </Item>
          <Item>
            <TiSocialFacebook />
          </Item>
          <Item>
            <AiOutlineInstagram />
          </Item>
          <Item>
            <AiFillGithub />
          </Item>
          <Item>
            <FaLinkedinIn />
          </Item>
        </Lista>

        <p>© Untitled</p>
      </FooterStyle>
    </Container>
  );
}
