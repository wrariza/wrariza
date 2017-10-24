import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import styled, { keyframes } from 'styled-components'
import { Grid, Row } from 'react-styled-flexboxgrid'
import { 
  LineAnimation, 
  LineHorizontalReverse 
} from '../components/LineAnimation.js'
import LabelAnimation from './LabelAnimation'
import NameAnimation from './NameAnimation.js'
import Ninja from '../components/Ninja'

const GridHero = styled(Grid)`
  text-align: center;
  padding: 10px;
  margin-top: 15%;
`

class Hero extends Component {
    render() {
        return(
            <GridHero>
                <Ninja/>
                <LineAnimation>
                </LineAnimation>
                <ReactSVG
                path="/static/wilariza.svg"
                    callback={svg => console.log(svg)}
                    className="wrariza"
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