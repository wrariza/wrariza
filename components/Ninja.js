import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Grid, Row } from 'react-styled-flexboxgrid'


const ninja = keyframes`
  0%{
    background-position: 0 0;
    opacity:0;
  }
  100%{
    background-position: right;
    opacity:1;
  }
`

const Content = styled(Row)`
  margin-right: auto;
  margin-left: auto;
  opacity:0;
  text-align: center;
  background-color: transparent;
  padding: 10px;
  height: 70px;
  background-image: url(/static/img/ninja.png);
  width: 100px !important;
  animation: ${ninja};
  animation-duration: .8s;
  animation-delay: 2s;
  animation-timing-function: steps(3);
  animation-fill-mode: forwards;
`
function Ninja() {
  return(
    <Content>
    </Content>
  )
}

export default Ninja