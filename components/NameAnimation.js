import styled, { keyframes , ThemeProvider} from 'styled-components'

const Animation = keyframes`
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
const NameAnimation = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  animation: ${Animation} 2s;
  text-decoration: none;
`

function Name (props) {
  return(
     <NameAnimation>
       {props.name}
     </NameAnimation>
  )
}

export default Name

