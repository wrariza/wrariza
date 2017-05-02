import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import { BlackTheme, LightTheme } from '../lib/theme.js';
import Hero from '../components/Hero.js'
import Perfil from '../components/Perfil'

function Home (props) {
  return(
      <ThemeProvider theme={LightTheme}>
        <Grid>
          <Hero></Hero>
          <Perfil></Perfil>
        </Grid>
      </ThemeProvider>
  )
}

export default Home