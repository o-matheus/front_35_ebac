import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  //Tag
  fundoTag: '#10AC84',

  // Body
  fundoBody: '#111',
  textoPrimaria: '#EEE',

  // MenuHeader
  fundoMenuHeader: '#333'
}

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${cores.fundoBody};
        color: ${cores.textoPrimaria};
        padding-top: 40px;
    }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
