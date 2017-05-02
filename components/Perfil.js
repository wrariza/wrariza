import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Row, Col , BASE_CONF} from 'react-styled-flexboxgrid'
import Icon from 'react-icons-kit'
import { linkedinSquare, github, graduationCap } from 'react-icons-kit/fa/'

const Container = styled(Row)`
    width: 100%;
    margin-top: 10px;
`
const Imgen = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-image: url('https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=0ede346e5d3b6f2bbbeaadad6dbf3b9a&oe=597A1CB4');
    margin: auto;
    background-repeat: no-repeat;
    background-position: -24px 0px;
`

const Info = styled(Row)`
    {
        padding: 15px 0px 15px 2px;
        font-size: 10px;
        height: 50px;
        display: flex;
        justify-content: center;
    }
`

function Perfil() {
    return(
       <Container xs={12}>
          <Col xs={4} xsOffset={4} >
            <Imgen></Imgen>
            <Info center="xs" center="lg">
                <Col>
                    <a href="https://www.linkedin.com/in/wrariza/" target="_blank">
                        <Icon icon={linkedinSquare}/>
                    </a>
                </Col>
                <Col>
                    <a href="https://github.com/wrariza" target="_blank">
                        <Icon icon={github}/>
                    </a>
                </Col>
                <Col>
                    <a href="https://platzi.com/@wrariza/" target="_blank">
                        <Icon icon={graduationCap}/>
                    </a>
                </Col>
            </Info> 
          </Col>
       </Container>
    )
}

export default Perfil