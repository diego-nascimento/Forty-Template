import React from 'react';
import { Container } from './SectionDivide.style';
import Item from '../Item/Item';

export default function SectionDivide({
  State,
  Bg1,
  Bg2,
  img1,
  img2,
  Texto1,
  Texto2,
  Subtexto1,
  Subtexto2,
}) {
  return (
    <Container State={State}>
      <Item Bg={Bg1} img={img1} Texto={Texto1} Subtexto={Subtexto1}></Item>
      <Item Bg={Bg2} img={img2} Texto={Texto2} Subtexto={Subtexto2}></Item>
    </Container>
  );
}
