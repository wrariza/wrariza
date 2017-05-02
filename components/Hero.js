import react from 'react'
import styled, { keyframes } from 'styled-components'
import { Grid, Row } from 'react-styled-flexboxgrid'
import { 
  LineAnimation, 
  LineHorizontalReverse 
} from '../components/LineAnimation.js'
import LabelAnimation from './LabelAnimation'
import NameAnimation from './NameAnimation.js'

const GridHero = styled(Grid)`
  text-align: center;
  padding: 10px;
  margin-top: 15%;
`
function Hero(props) {
    return(
        <GridHero>
            <LineAnimation>
            </LineAnimation>
                <NameAnimation>
                wrariza
                </NameAnimation>
            <LineHorizontalReverse>
            </LineHorizontalReverse>
            <Row>
                <LabelAnimation>
                    HI I'M WILLIAM RICARDO ARIZA, I LOVE THE SOFTWARE BUILT WITH PASSION AND THE 
                    <span className="corazon"> ♥ </span>:)
                </LabelAnimation>
            </Row>
        </GridHero>
    )
}

export default Hero