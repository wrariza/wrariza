import React, { Component }from 'react'
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

class Hero extends Component {
    render() {
        return(
            <GridHero>
                <LineAnimation>
                </LineAnimation>
                    <NameAnimation
                        name={this.props.name}
                    />
                <LineHorizontalReverse>
                </LineHorizontalReverse>
                <Row>
                    <LabelAnimation 
                        label={this.props.label} 
                    />
                </Row>
            </GridHero>
        )
    }
}

export default Hero