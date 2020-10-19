import { ButtonStyle } from './Button.style';

export default function Button({ children, backGround }) {
  return (
    <ButtonStyle style={{ background: backGround ? backGround : 'none' }}>
      {children}
    </ButtonStyle>
  );
}
