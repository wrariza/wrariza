import React, { Component } from 'react';
import Document, {
  Main,
  NextScript,
  Head,
} from 'next/document';

import styled from 'styled-components'

class Wrariza extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Wrariza</title>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
          <style>{`
            body { 
                background: #000;
            }
            `}</style>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}

export default Wrariza