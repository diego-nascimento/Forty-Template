import React from 'react';
import { Container, Content } from './Section3.style';
import Button from '../../Button/Button';
import { BsArrowRight } from 'react-icons/bs';

export default function Section3() {
  return (
    <Container>
      <Content className="highSize">
        <h2>Massa libero</h2>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
        </p>
        <Button Size={{ width: '200px' }}>
          Get Started
          <BsArrowRight
            style={{
              fontSize: '80px',
              height: '50px',
            }}
          />
        </Button>
      </Content>
    </Container>
  );
}
