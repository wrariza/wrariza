import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'
import { BlackTheme, LightTheme } from '../lib/theme.js'
import Hero from '../components/Hero.js'
import Perfil from '../components/Perfil'
import Ninja from '../components/Ninja'

class Home extends Component {
  render() {
    return(
      <ThemeProvider theme={LightTheme}>
        <Grid>
          <Hero
            name=""
            label="HI I'M WILLIAM RICARDO ARIZA, I LOVE THE SOFTWARE BUILT WITH PASSION AND THE"
          />
          <Perfil/>
        </Grid>
      </ThemeProvider>
    )
  }
}

export default Home