import { ButtonStyle } from './Button.style';

export default function Button({ children, Color, Size }) {
  return (
    <ButtonStyle Color={Color} Size={Size}>
      {children}
    </ButtonStyle>
  );
}
