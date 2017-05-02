import styled, { keyframes , ThemeProvider} from 'styled-components'

const lineHorizontalAnimation = keyframes`
  0%{
    left: 0%;
    width: 200px;
    background-color: #f44336;   
  }
  %5{
    left: 5%;
  }
  %10{
    left: 10%;
    background-color: #e91e63;
  }
  15%{
    left: 15%;
  }
  20%{
    left: 20%;
    background-color: #9c27b0;
  }
  25%{
     left: 25%;
  }
  30%{
    left: 30%;
     background-color: #f44336;
  }
  35%{
    left: 35%;
  }
  40%{
    left: 40%;
    background-color: #673ab7;
  }
  45%{
    left: 45%;
  }
  50%{
    left: 50%;
    width: 200px;
    background-color: #3f51b5;
  }
  55%{
    left: 55%;
  }
  60%{
    left: 60%;
    background-color: #2196f3;
  }
  65%{
    left: 65%;
  }
  70%{
    left: 70%;
    background-color: #03a9f4;
  }
  75%{
    left: 75%
  }
  80%{
    left: 80%;
    background-color: #f44336;
  }
  90%{
    left: 90%;
    background-color: #F2F2F2;
  }
  100%{
    width: 200px;
    left: 95%;
    background-color: #B6F6F6;
  }
`

const LineAnimation = styled.div`
  position: absolute;
  background-color: ${props=>props.theme.fontColor};
  height: 1px;
  animation-direction: reverse;
  animation: ${lineHorizontalAnimation} 1.5s;
`

const LineHorizontalReverse = styled(LineAnimation)`
   animation-direction: reverse;
   left: calc(100% - 20px);
`

export { LineAnimation, LineHorizontalReverse }