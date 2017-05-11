import styled, { keyframes , ThemeProvider} from 'styled-components'

const AnimationType = keyframes`
  from{ 
    width: 0;
  }
  to{
    white-space: normal;
  }
`
const AnimationType2 = keyframes`
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; } 
`
const AnimationBlink = keyframes`
  {
    to{opacity: .0;}
  }
`
const LabelAnimation = styled.div`
   { 
    width: 100%;
    white-space: nowrap;
    text-alinght: center;
    overflow: hidden;
    animation: ${AnimationType} 4s steps(60, end) forwards; 
    text-transform: uppercase; 
    font: .7em menlo;
    margin: auto;
  }

  :nth-child(2){
    animation: ${AnimationType2} 8s steps(60, end);
  }

  a{
    color: lime;
    text-decoration: none;
  }

  span{
    animation: ${AnimationBlink} 1s infinite;
  }

  .corazon{
    color: red;
    font-size: 2em;
  }

  ::selection{
    background: black;
  } 
`

function Label(props) {
  return(
    <LabelAnimation>
      {props.label}
      <span className='corazon'> ♥ </span>:)
    </LabelAnimation>
  )
}

export default Label