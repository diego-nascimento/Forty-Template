import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
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
  max-width: 1600px;
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
  font-size: 1em;


  @media (max-width: 500px){
    font-size: .8em;
  }
}

a, span, strong {
  letter-spacing: 3px;
  color: white;
}
span{
  font-weight: 700;
}


`;
