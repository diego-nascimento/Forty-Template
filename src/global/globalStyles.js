import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
}

html{
  font-size: calc(1em + 1vw);
}

body{
  font-family: 'Source Sans Pro', sans-serif;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
}


.fullSize{
  width: 100%;
}

.highSize{
  width: 100%;
  max-width: 1400px;
  padding: 0px 20px;
}

.minSize{
  width: 100%;
  max-width: 700px;
}


#__next {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

ul, li, a, span, strong {
  text-decoration: none;
  list-style: none;
  font-size: .6em;

  @media(max-width: 800px){
    font-size: .8em;
  }
}

a, span, strong {
  letter-spacing: .3em;
  color: white;
}
span{
  font-weight: 700;
}
`;
