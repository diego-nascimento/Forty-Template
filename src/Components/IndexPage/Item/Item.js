import React from 'react';
import { Container, Letreiro } from './Item.style';

export default function Item({ Bg, img, Texto, Subtexto }) {
  return (
    <Container Bg={Bg} img={img}>
      <Letreiro>
        <h2>{Texto}</h2>
        <p>{Subtexto}</p>
        <div className="modal"></div>
      </Letreiro>
    </Container>
  );
}
