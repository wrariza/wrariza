import React from 'react'
import styled, { keyframes , ThemeProvider} from 'styled-components'


const lineHorizontalAnimation = keyframes`
  0%{
    left: 0%;
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
    left: 95%;
    background-color: #B6F6F6;
  }
`
const nameAnimation = keyframes`
  %0{
    color: #f44336;
  }
  %10{
    color: #e91e63;
  }
  20%{
    color: #9c27b0;
  }
  30%{
     color: #f44336;
  }
  40%{
    color: #673ab7;
  }
  50%{
    color: #3f51b5;
  }
  60%{
    color: #2196f3;
  }
  70%{
    color: #03a9f4;
  }
  80%{
    color: #f44336;
  }
  90%{
    color: #F2F2F2;
  }
  100%{
    color: #B6F6F6;
  }
`
const Container = styled.div`
  display: flex;
  font-size: 50px;
  justify-content: center;
  align-content: center;
  margin-top: 20%;
  
  a{
    text-transform: uppercase;
    animation: ${nameAnimation} 3s infinite;
    text-decoration: none;
  }
`

const LineHorizontal = styled.div`
  width: 200px;
  position: absolute;
  background-color: white;
  height: 1px;
  animation-direction: alternate-reverse;
  animation: ${lineHorizontalAnimation} 1.5s infinite;
`

const LineHorizontalReverse = styled(LineHorizontal)`
   animation-direction: alternate;
`

const type = keyframes`
  from{ 
    width: 0;
  } 
`

const type2 = keyframes`
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; } 
`

const blink = keyframes`
  {
    to{opacity: .0;}
  }
`

const Label = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  p{
    color: lime; 
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-align: center; 
    animation: ${type} 4s steps(60, end); 
    text-transform: uppercase; 
    color: white;
    font: 16px menlo;
  }

  p:nth-child(2){
    animation: ${type2} 8s steps(60, end);
  }

  p a{
    color: lime;
    text-decoration: none;
  }

  span{
    animation: ${blink} 1s infinite;
  }

  ::selection{
    background: black;
  }
  
`
function Home () {
  return(
    <div>
     <LineHorizontal>
     </LineHorizontal>
      <Container>
        <a href="https://twitter.com/@wrariza" title="William Ariza">@wrariza</a>
      </Container>
     <LineHorizontalReverse>
     </LineHorizontalReverse>
     <Label>
        <p>
        HELLO I AM WILLIAM, I LOVE THE SOFTWARE BUILT WITH PASSION AND THE ♥ 
        :)<span>|</span></p>
     </Label>
      <Label><p>
        </p>
      </Label>
    </div>
  )
}

export default Home; 